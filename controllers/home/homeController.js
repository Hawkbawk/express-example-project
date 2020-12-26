import express from 'express';
// eslint-disable-next-line no-unused-vars
const { Request, Response } = express;

class HomeController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  getHomePage(req, res) {
    res.render('index', { title: 'Express' });
  }
}

export default new HomeController();
