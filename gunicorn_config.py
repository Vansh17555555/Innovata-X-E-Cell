# gunicorn_config.py
bind = "0.0.0.0:5000"
workers = 3  # Number of worker processes
timeout = 120  # Increase timeout to 120 seconds
