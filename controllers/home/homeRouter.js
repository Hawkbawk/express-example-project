import express from 'express';

import HomeController from './homeController.js';

const homeRouter = express.Router();

homeRouter.get('/', HomeController.getHomePage);

export default homeRouter;
