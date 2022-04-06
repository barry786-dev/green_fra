# App Map

## Here we will show some advantages and working ideas of our App

- The App is caring for lost connection each time trying to reach to the data we build a function ./models/db_mongo.js/**ghDbConnect**() which will be called to check the status of the database connection before send any request to the data base, that protect ou program from any unexpected data base connection fault

- We used bcrypt password to save user passwords in our data base.

- we are will validate the entered data with error proper messages through three levels:

  - Frontend Validation , using library called .... // this will help the user to enter right data
  - Server Side validation, using express-validation schema // this will protected the server from any bad data values coming from frontEnd
  - Database Validation, using mongoose schema validation // this will protect dataBase from any potential error during validate the data at server side 

- we are using confirmationCode and special token to verify that the user is using real exist email



