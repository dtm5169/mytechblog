const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Why is MYC so important',
    text: "MVC allow developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
    user_id: 1,
    post_date: 'May 08, 2020 17:00:00'
  },
  {
    title: 'Authentication vs. Authorization',
    text: "The is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system",
    user_id: 1,
    post_date: 'May 08, 2020 17:00:00'
  },
  {
    title: 'Object Oriented Mapping',
    text: "I have really loved learning about ORMs. Its simplified the way I create queries in SQL!",
    user_id: 2,
    post_date: 'May 08, 2020 17:00:00'
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
