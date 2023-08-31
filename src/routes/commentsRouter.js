const commentsRouter = require('express').Router();
const { Comment, Candidate } = require('../../db/models');
const isAuth = require('../middlewares/isAuth');

commentsRouter.post('/:id', isAuth , async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const { login } = req.session;
    const newComment = await Comment.create({ candidate_id: id, body });
    res.json(newComment);
  } catch (error) {
    res.send(error);
  }
});

module.exports = commentsRouter;
