import { Request, Response } from 'express';
import CreateEstablishmentService from '../services/CreateEstablishmentService';
import DeleteEstablishmentService from '../services/DeleteEstablishmentService';
import FindEstablishmentById from '../services/FindEstablishmentById';
import ListEstablishmentsService from '../services/ListEstablishmentsService';
import UpdateEstablishmentService from '../services/UpdateEstablishmentService';

export default {
  async index(_request: Request, response: Response) {
    const listEstablishments = new ListEstablishmentsService();

    const establishments = await listEstablishments.execute();
    return response.json(establishments);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const establishmentById = new FindEstablishmentById();

    const establishment = await establishmentById.execute(id);
    return response.json(establishment);
  },
  async create(request: Request, response: Response): Promise<Response> {
    const { name, latitude, longitude, description } = request.body;

    const createEstablishment = new CreateEstablishmentService();

    const establishment = await createEstablishment.execute({
      name,
      latitude,
      longitude,
      description,
    });

    return response.status(201).json(establishment);
  },
  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, latitude, longitude, description } = request.body;

    const updateEstablishment = new UpdateEstablishmentService();

    const establishment = await updateEstablishment.execute({
      id,
      name,
      latitude,
      longitude,
      description,
    });

    return response.json(establishment);
  },
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEstablishments = new DeleteEstablishmentService();

    await deleteEstablishments.execute(id);

    return response.status(204).json();
  },
};
