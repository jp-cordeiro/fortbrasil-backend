import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionController from '../controllers/SessionController';

const validateAuthentication = {
  [Segments.BODY]: {
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  },
};

const routes = Router();

routes.post('/', celebrate(validateAuthentication), SessionController.create);

export default routes;
