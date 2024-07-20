# SecureFlow : Transaction Ki Purani Pareshani Ka Hal
![alt text](<Screenshot 2024-07-20 at 2.29.08 PM.png>)SecureFlow is an advanced fraud detection system designed to identify and mitigate fraudulent activities in financial transactions. By leveraging machine learning and data analysis, SecureFlow provides real-time fraud detection and transaction scoring to ensure secure financial transactions.

## Table of Contents
1.Project Overview\
2.Features\
3.Technology Stack\
4.Getting Started\
5.Data Features\
6.Data Cleaning and Preprocessing\
7.Model Training\
8.Real-Time Fraud Detection\
9.User Interface\
10.Deployment

## Project Overview
SecureFlow is built to detect fraudulent transactions by analyzing various features of financial transactions and user behavior. It includes a machine learning model for fraud detection, a transaction scoring system, and a user-friendly interface for monitoring transactions and alerts.

## Features
**Fraud Detection**: Utilizes machine learning models to detect anomalies and fraud patterns.\
**Transaction Scoring**: Calculates transaction scores based on user behavior and transaction characteristics.\
**Real-Time Alerts**: Provides immediate notifications for suspected fraudulent transactions.\
**User Interface**: Includes a dashboard for monitoring transactions and managing alerts.\
**Data Analytics**: Analyzes transaction data to identify patterns and trends.

## Data Features 
**1.Transaction Amount**: Compare the amount with the user's average transaction amount.\
**2.Transaction Frequency**: Frequency of transactions within a certain period.\
**3.Distance**: Distance between the sender and receiver's locations.\
**4.Account Age**\: Older accounts might be less risky.\
**5.Transaction Recency**: Time since the last transaction.\
**6.Unusual Activity Flag**: Indicator of unusual activity.\
**7.Number of Unique Devices**: High number of devices accessing the account might lower the score.\
**8.Number of Unique Locations**: High number of locations accessing the account might lower the score.\
**9.Blacklist/Whitelist Status**: Presence in a whitelist might increase the transaction score.\
**10.Transaction Amount Deviation**: Deviation from the user's average transaction amount.\
**11.Credit Score**: Higher credit scores might indicate lower risk.\
**12.Account Status**: Active and verified accounts might have higher scores.

## Data Gathering and Data Cleaning
We have created our synthetic data for the project and also integrated with other data sources of fraud detection like Kaggle to create Data features mentioned above .

The data cleaning steps include like :-\
1.Evaluating data features data type.\
2.Handling missing values for both categorical and numerical data types.\
3.Selecting the data features that are mentioned above form many different data features form csv file \
4. Then Creating the final csv file name new.csv


## Model Training
pass
