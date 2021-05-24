const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
        {
          model: Comment,
          attributes: ['id', 'user_id', 'blog_id', 'text', 'post_date'],
          include:[
            {
              model: User,
              attributes: ['id', 'username'],
            }
          ]
        },
      ],
    });

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// Use the custom middleware before allowing the user to access the blog
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
    include: [
        {
        model: User,
        attributes: ['id', 'username'],
        },
        {
          model: Comment,
          attributes: ['id', 'user_id', 'blog_id', 'text', 'post_date'],
          include:[
            {
              model: User,
              attributes: ['id', 'username'],
            }
          ]
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all comments for blog
/*router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });

    const comment = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    const comment = dbCommentData.get({ plain: true });
    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});*/

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });
module.exports = router;