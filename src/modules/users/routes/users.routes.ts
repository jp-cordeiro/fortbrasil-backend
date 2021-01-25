import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/UsersController';

const validateUser = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  },
};

const routes = Router();

routes.post('/', celebrate(validateUser), UsersController.create);

export default routes;
