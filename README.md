# Diet Monitoring for Nutrient Tracking

This web application allows users to monitor their diet and nutrient intake. It provides a range of features including user registration, login, health information management, voice input for dietary data, data retrieval from APIs, nutrient tracking, diet planning, and dietitian consultations.

## Functional Requirements

### 1. New User Registration
- New users can register by providing basic details.
- Users must set a username and password, which are stored securely for future login.
- User registration details are stored in a dedicated database.

### 2. Registered User Login
- Registered users can log in using their usernames and passwords.
- The application verifies the correctness of login credentials.
- Access is granted only to users with valid credentials.

### 3. Health Information
- Users are prompted to enter their health conditions and ongoing treatments.
- Health information is collected to provide personalized dietary advice.

### 4. Voice Input from Users
- Users can input daily food consumption using voice commands.
- Voice input is processed to extract details about consumed food items.

### 5. Fetching Data about Food Items
- The application retrieves information about various food items from external sources through API calls.
- Fetched data is stored in databases for reference.

### 6. Plotting Graphs and Planning the Diet
- Based on a user's monthly dietary data, the application generates graphs showing nutrient consumption trends.
- Long-term dietary planning is facilitated by comparing nutrient intake against predefined thresholds.

### 7. Assigning a Dietitian
- Users can request advice from qualified dietitians.
- The application assigns a dietitian based on user preferences and qualifications.
- A chat window is initiated for user-dietitian communication.
- Dietitians have access to user health records and provide guidance on healthy lifestyles, food consumption, exercise routines, and nutrient intake.

## Technology Stack

- Backend: Flask for API development and data handling.
- Database: MongoDB Atlas for cloud-based storage.
- Frontend: React for user interface.
- Voice Input: Alexa-like functionality for voice recognition.
- Security: Bcrypt hashing for password encryption.

## System Architecture
![image](https://github.com/Arya-adesh/Diet-Monitor/assets/84959568/60e73089-8780-4715-bcb2-505368b4b2c6)

