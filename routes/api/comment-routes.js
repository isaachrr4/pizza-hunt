const router = require('express').Router();
//shortcut for all of the api requests
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controllers');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

  router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;