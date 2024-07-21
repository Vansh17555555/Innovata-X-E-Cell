from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model and scaler
model = load_model('fraud_detection_model1.keras')
scaler = joblib.load('scaler1.pkl')

# Define feature names used for scaling
feature_names = [
    'transaction_amount', 'transaction_frequency', 'distance', 'account_age_days',
    'transaction_recency', 'unusual_activity_flag', 'num_unique_devices', 'num_unique_locations',
    'blacklist_whitelist_status', 'transaction_amount_deviation', 'credit_score', 'account_status'
]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    # Extract required fields
    amount = data.get('amount')
    credit_score = data.get('credit_score')
    balance = data.get('balance')

    if amount is None or credit_score is None:
        return jsonify({'error': 'Missing required fields'}), 400

    # Simulate additional features
    transaction_data = {
        'transaction_amount': amount,
        'credit_score': credit_score,
        'account_age_days': np.random.randint(1, 365),
        'transaction_frequency': np.random.randint(1, 50),
        'transaction_recency': np.random.randint(1, 365),
        'distance': np.random.uniform(0, 1000),
        'unusual_activity_flag': int(np.random.random() < 0.1),
        'num_unique_devices': np.random.randint(1, 10),
        'num_unique_locations': np.random.randint(1, 10),
        'blacklist_whitelist_status': np.random.choice([0, 1]),
        'transaction_amount_deviation': np.random.uniform(0, 500),
        'account_status': np.random.choice([0, 1])
    }

    # Create DataFrame for scaling
    transaction_df = pd.DataFrame([transaction_data], columns=feature_names)
    
    # Transform the data using the scaler
    transaction_scaled = scaler.transform(transaction_df)

    # Make prediction
    prediction = model.predict(transaction_scaled)
    transaction_score = prediction[0][0]
    is_fraud = transaction_score > 0.3  # Adjust threshold as needed

    return jsonify({
        'transaction_score': float(transaction_score),
        'is_fraud': bool(is_fraud)
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
