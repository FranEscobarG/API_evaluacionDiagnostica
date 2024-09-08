import { Request, Response, NextFunction } from 'express';
import CreateFlowerUseCase from '../../application/create-flower-usecase';
import GetFlowerCatalogUseCase from '../../application/get-flowerCatalog-usecase';
import GetFlowerByIdUseCase from '../../application/get-flowerById-usecase';
import UpdateFlowerUseCase from '../../application/update-flower-usecase';
import DeleteFlowerUseCase from '../../application/delete-flower-usecase';
import { LocalFileStorage } from '../adapters/storages/local-file-storage';

const localFileStorage = new LocalFileStorage();


class FlowerController {
  constructor(
    private getFlowerCatalogUseCase: GetFlowerCatalogUseCase,
    private createFlowerUseCase: CreateFlowerUseCase,
    private getFlowerByIdUseCase: GetFlowerByIdUseCase,
    private updateFlowerUseCase: UpdateFlowerUseCase,
    private deleteFlowerUseCase: DeleteFlowerUseCase
  ) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void | any> {
    try {
      const flowerPayload = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).send('No file uploaded');
      }

      // Guardar archivo localmente
      const localFilePath = await localFileStorage.uploadFile(file);

      const flowerData = { ...flowerPayload, image: localFilePath };
      const flower = await this.createFlowerUseCase.execute(flowerData);

      res.status(201).json(flower);
    } catch (error) {
      next(error);
    } finally {
      if (req.file) {
        console.log("Flor agregada con exito")
      }
    }
  }

  async getCatalog(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const flowers = await this.getFlowerCatalogUseCase.execute();
      res.json(flowers);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
      const flower = await this.getFlowerByIdUseCase.run(id);
      res.json(flower);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void | any> {
    try {
      const flowerId = req.params.id;
      const flowerPayload = req.body;
      const file = req.file;

      // Obtener la publicación existente
      const existingFlower = await this.getFlowerByIdUseCase.run(flowerId);
      if (!existingFlower) {
        return res.status(404).send('Flower not found');
      }

      // Eliminar imagen antigua si existe una nueva
      if (file) {
        await localFileStorage.deleteFile(existingFlower.image);

        // Guardar archivo localmente
        const localFilePath = await localFileStorage.uploadFile(file);

        flowerPayload.image = localFilePath;
      }

      const updatedFlower = await this.updateFlowerUseCase.execute(flowerId, flowerPayload);
      res.json(updatedFlower);
    } catch (error) {
      next(error);
    } finally {
      if (req.file) {
        console.log("Publicacion creada con exito");
      }
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void | any> {
    try {
      const flowerId = req.params.id;

      // Obtener la publicación existente
      const existingFlower = await this.getFlowerByIdUseCase.run(flowerId);
      if (!existingFlower) {
        return res.status(404).send('Flower not found');
      }

      // Eliminar imagen del almacenamiento local
      await localFileStorage.deleteFile(existingFlower.image);

      const result = await this.deleteFlowerUseCase.execute(flowerId);
      res.status(result ? 200 : 404).json({ success: result });
    } catch (error) {
      next(error);
    } finally {
      if (req.file) {
        console.log("Flor aliminada con exito");
      }
    }
  }

}

export default FlowerController;
