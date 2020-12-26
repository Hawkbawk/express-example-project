import express from 'express';

const router = express.Router();
/**
 * The PostController handles everything related to posts.
 */
class PostController {
  constructor() {
    router.get('/post/:id', this.getPost);
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   */
  getPost(req, res) {
    res.json({
      message: `You tried to get a post with id ${req.params.id}`,
    });
  }
}

new PostController();

export default router;
