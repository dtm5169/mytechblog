const { Comment } = require('../models');

const commentdata = [
  {
    text: "Wow I didn't know about this",
    user_id: 2,
    blog_id: 1,
    post_date: 'May 08, 2020 20:29:00',
  },
  {
    text: "How can you confuse the two?",
    user_id: 1,
    blog_id: 2,
    post_date: 'May 08, 2020 23:46:00',
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;