import express from 'express';
// eslint-disable-next-line no-unused-vars
const { Request, Response } = express;

class UserController {
  /**
   * Renders all of the users in the database.
   * @param {Request} req
   * @param {Response} res
   */
  getAll(req, res) {
    res.json([
      {
        first: "I'm the first user.",
      },
      {
        second: "I'm the second user.",
      },
    ]);
  }

  /**
   * Using a get request, allows you to find a user by their id.
   * @param {Request} req
   * @param {Response} res
   */
  findByID(req, res) {
    res.json({
      message: `You tried to get the user with id: ${req.params.id}`,
    });
  }
}

export default new UserController();
