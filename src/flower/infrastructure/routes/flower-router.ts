// infrastructure/publication-router.ts
import express from "express";
import { flowerController } from "../flower-dependencies";
import { upload } from "../adapters/storages/local-file-storage";

const flowerRouter = express.Router();

flowerRouter.get("/", flowerController.getCatalog.bind(flowerController));
flowerRouter.post("/", upload.single('image'), flowerController.create.bind(flowerController));
flowerRouter.get("/:id", flowerController.getById.bind(flowerController));
flowerRouter.put('/:id', upload.single('image'), flowerController.update.bind(flowerController));
flowerRouter.delete('/:id', flowerController.delete.bind(flowerController));

export { flowerRouter };
