import express from 'express';
// eslint-disable-next-line no-unused-vars
const { Request, Response } = express;
/**
 * The PostController handles everything related to posts.
 */
class PostController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  getPost(req, res) {
    res.json({
      message: `You tried to get a post with id ${req.params.id}`,
    });
  }
}

export default new PostController();
