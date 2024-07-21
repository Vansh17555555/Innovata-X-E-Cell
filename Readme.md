# SecureFlow : End-to-End Fraud Detection System

SecureFlow: End-to-End Fraud Detection System
SecureFlow is an advanced fraud detection system designed to identify and mitigate fraudulent activities in financial transactions. By leveraging machine learning and data analysis, SecureFlow provides real-time fraud detection and transaction scoring to ensure secure financial transactions.
##  Table of Contents
Project Overview\
Features\
Technology Stack\
Getting Started\
Data Features\
Data Cleaning and Preprocessing\
Model Training\
Deployment

## Project Overview
SecureFlow is built to detect fraudulent transactions by analyzing various features of financial transactions and user behavior. It includes a machine learning model for fraud detection, a transaction scoring system, and a user-friendly interface for monitoring transactions and alerts.

## Features:-
Fraud Detection: Utilizes machine learning models to detect anomalies and fraud patterns.\
Transaction Scoring: Calculates transaction scores based on user behavior and transaction characteristics.\
Real-Time Alerts: Provides immediate notifications for suspected fraudulent transactions.\
Data Analytics: Analyzes transaction data to identify patterns and trends.

## Technology Stack
**Programming Language**: Python,Typescript\
**Machine Learning Libraries**: Scikit-learn, TensorFlow, Keras\
**Data Processing**: Pandas, NumPy\
**Web Framework**: Nextjs , expressjs\
**Database**: PostgreSQL 
**Deployment**: Docker,vercel 

## Data Features
**1Transaction Amount**: Compare the amount with the user's average transaction amount.\
**2Transaction Frequency**: Frequency of transactions within a certain period.\
**3Distance**: Distance between the sender and receiver's locations.\
**4Account Age**: Older accounts might be less risky.\
**5Transaction Recency**: Time since the last transaction.\
**6Unusual Activity Flag**: Indicator of unusual activity.\
**7Number of Unique Devices**: High number of devices accessing the account might lower the score.\
**8Number of Unique Locations**: High number of locations accessing the account might lower the score.\
**9Blacklist/Whitelist Status**: Presence in a whitelist might increase the transaction score.\
**10Transaction Amount Deviation**: Deviation from the user's average transaction amount.\
**11Credit Score**: Higher credit scores might indicate lower risk.\
**12Account Status**: Active and verified accounts might have higher scores.

## Data Gathering and Data Cleaning
We have created our oen synthetic data and had merged with other data sources of fraud detection to make a csv file.

In data cleaning steps:-
1. Evaluating data types of features.
2. Handling missing values of both categorical and numerical features .
3. we have smotted the data to manage imbalance dataset.
4. Selecting adequate data features for our final training model

## Model Training
1. We label encoded the categorical features
2. Apply train test split and standardize the data.
3. We created a aritficial neural network model to predict fraud scores.
4. We included various hyperparameter tunning component like early callbacks , ReduceLROnPlateau , kfolding techniques 


 
