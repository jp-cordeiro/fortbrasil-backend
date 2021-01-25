import { Router } from 'express';

import ensureAthenticated from './middlewares/ensureAthenticated.ts';

import establishmentsRoutes from './modules/establishments/routes/estblishments.routes';
import usersRoutes from './modules/users/routes/users.routes';
import sessionsRoutes from './modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/establishments', ensureAthenticated, establishmentsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
