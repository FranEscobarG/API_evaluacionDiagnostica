import CreateFlowerUseCase from "../application/create-flower-usecase";
import DeleteFlowerUseCase from "../application/delete-flower-usecase";
import GetFlowerByIdUseCase from "../application/get-flowerById-usecase";
import GetFlowerCatalogUseCase from "../application/get-flowerCatalog-usecase";
import UpdateFlowerUseCase from "../application/update-flower-usecase";
import FlowerController from "./controllers/flower-controller";

import { MySQLFlowerRepository } from "./adapters/repositories/mysql-flower-repository";

const flowerRepository = new MySQLFlowerRepository();

export const getFlowerCatalogUseCase = new GetFlowerCatalogUseCase(
  flowerRepository
);

export const createFlowerUseCase = new CreateFlowerUseCase(
  flowerRepository
);

export const getFlowerByIdUseCase = new GetFlowerByIdUseCase(
  flowerRepository
);

export const updateFlowerUseCase = new UpdateFlowerUseCase(
  flowerRepository
);

export const deleteFlowerUseCase = new DeleteFlowerUseCase(
  flowerRepository
);

export const flowerController = new FlowerController(
  getFlowerCatalogUseCase, 
  createFlowerUseCase, 
  getFlowerByIdUseCase, 
  updateFlowerUseCase, 
  deleteFlowerUseCase
);
