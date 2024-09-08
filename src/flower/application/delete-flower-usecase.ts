import { FlowerRepository } from '../domain/ports/flower-repository';

class DeleteFlowerUseCase {
  constructor(private flowerRepository: FlowerRepository) {}

  async execute(flowerId: string): Promise<boolean> {
    const result = await this.flowerRepository.delete(flowerId);

    if (!result) {
      throw new Error(`No se pudo eliminar la Flor con id: ${flowerId}`);
    }

    console.log(`Flor con id: ${flowerId} ha sido eliminado`);
    return result; // Devuelve un booleano
  }
}

export default DeleteFlowerUseCase;
