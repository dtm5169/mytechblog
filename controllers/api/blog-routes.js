const router = require('express').Router();
const Blog = require('../../models/Blog');

// route to create/add a blog
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      description: req.body.text,
      user_id: req.body.user_id,
      post_date: req.body.post_date,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one dish can be updated with new data in the database.
  try {
    const blog = await Blog.update(
      {
        title: req.body.title,
        description: req.body.text,
        user_id: req.body.user_id,
        post_date: req.body.post_date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
