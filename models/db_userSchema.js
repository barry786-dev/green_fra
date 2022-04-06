const mongoose = require('mongoose');
const { Schema } = mongoose;
//const { validateEmail } = require('../controllers/db_Handlers');
//const uniqueValidator = require('mongoose-unique-validator');

// Create user schema
const userSchema = new Schema(
  {
    userFirstName: {
      type: String,
      required: [true, 'userFirstName is required'],
      minLength: [
        2,
        `first name must be more than 2 characters, you entered only: ${
          'VALUE'.length
        }`,
      ],
      maxLength: [20, ' first name should be not more than 20 characters'],
      match: [/^[a-z]+$/gi, 'User first name can not have special characters'],
    },
    userLastName: {
      type: String,
      required: [true, 'userLastName is required'],
      minLength: [2, 'last name must be more than 2 characters'],
      maxLength: [20, ' last name should be not more than 20 characters'],
      match: [/^[a-z]+$/gi, 'User last name can not have special characters'],
    },
    userName: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'userName is required'],
      minLength: [4, 'user name must be more than 4 characters'],
      maxLength: [20, ' user name should be not more than 20 characters'],
      match: [/^[a-z]+$/gi, 'User user name can not have special characters'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      //unique: [true, 'That email address is taken.'],
      unique: true,
      required: [true, 'email is required'],
      minLength: [5, 'user name must be more than 4 characters'],
      maxLength: [40, ' user name should be not more than 40 characters'],
      //validate: [validateEmail, 'Please fill a valid email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    status: {
      type: String,
      enum: ['pending', 'Active'],
      default: 'pending',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    userType: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { collection: 'Users' }
);
// userSchema.plugin(uniqueValidator);
const Users = mongoose.model('Users', userSchema);

module.exports = Users;
