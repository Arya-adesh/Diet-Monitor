* The application utilizes voice input from the user, which can be provided through platforms like Alexa, using different formats such as '1 bowl rice,' 'bowl 1 rice,' or 'bowl rice 1' for flexibility.

* Alexa processes the user's speech input, parsing it through an Ingredient parser to extract three main components: food name, quantity, and unit.

* The parsed components are stored in MongoDB Atlas, a cloud database, during user interactions with Alexa.

* Upon user login, data is transferred from MongoDB Atlas to a local food database structured as tables, where each attribute corresponds to the extracted parameters.

* API calls are employed to calculate nutrient consumption based on quantity and unit, adhering to WHO standards. The calculated data is stored in a nutrient database with separate attributes for various nutrients.

* Users can request dietitian consultations, filter dietitians by expertise, and engage in a chat window to communicate. Dietitians analyze user nutrient data to offer feedback.

* Visual representations, such as timelines, sticky notes, bar graphs, and line graphs, assist users in comprehending food consumption patterns and nutrient intake fluctuations.

* User-related details, including height, weight, gender, diseases, and ongoing treatments, are gathered through quizzes and forms. This information helps dietitians assess the user's health status.