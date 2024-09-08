import { FlowerRepository } from '../domain/ports/flower-repository';
import { Flower } from '../domain/flower';

class UpdateFlowerUseCase {
  constructor(private flowerRepository: FlowerRepository) {}

  async execute(flowerId: string, flowerPayload: Partial<Flower>): Promise<Flower> {
    const result = await this.flowerRepository.update(flowerId, flowerPayload);

    if (!result) {
      throw new Error(`Id: ${flowerId} de publicacion no encontrada`);
    }

    return result;
  }
}

export default UpdateFlowerUseCase;
