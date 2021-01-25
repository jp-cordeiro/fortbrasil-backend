import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import EstablishmentsController from '../controllers/EstablishmentsController';

const validateParamsRequest = {
  [Segments.PARAMS]: {
    id: Joi.string().required().uuid(),
  },
};

const validateEstablishmentRequest = {
  [Segments.BODY]: {
    name: Joi.string().required(),
    description: Joi.string(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  },
};

const validateEstablishmentUpdate = {
  ...validateParamsRequest,
  ...validateEstablishmentRequest,
};

const routes = Router();

routes.get('/', EstablishmentsController.index);
routes.get(
  '/:id',
  celebrate(validateParamsRequest),
  EstablishmentsController.show,
);
routes.post(
  '/',
  celebrate(validateEstablishmentRequest),
  EstablishmentsController.create,
);
routes.patch(
  '/:id',
  celebrate(validateEstablishmentUpdate),
  EstablishmentsController.update,
);
routes.delete(
  '/:id',
  celebrate(validateParamsRequest),
  EstablishmentsController.delete,
);

export default routes;
