const { User } = require('../models');

const userdata = [
  {
    username: "Xandromus",
    email: 'andromusX@aol.com',
    password: '123456',
  },
  {
    username: "Lernantino",
    email: 'florencetime@yahoo.com',
    password: '123456',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;