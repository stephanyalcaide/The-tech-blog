const { User } = require('../models');
// variables and models
const userData = [
  {
    username: "fred",
    email: "fred@gmail.com",
    password: "password1234"
  },
  {
    username: "Eric",
    email: "Eric45@gmail.com",
    password: "password1239"
  },
  {
    username: "Steve",
    email: "steve90@gmail.com",
    password: "password1234"
  },
  {
    username: "Lily",
    email: "lily78@gmail.com",
    password: "password1237"
  },
  {
    username: "Joe",
    email: "joe56@gmail.com",
    password: "password12390"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING!!!!! seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
