import { FlowerRepository } from '../domain/ports/flower-repository';
import { Flower } from '../domain/flower';

class CreateFlowerUseCase {
  constructor(private flowerRepository: FlowerRepository) {}

  async execute(flower: Omit<Flower, 'id' >): Promise<Flower> {
    const newFlower = new Flower(
      null,
      flower.name,
      flower.type,
      flower.price,
      flower.image
    );

    return this.flowerRepository.create(newFlower);
  }
}

export default CreateFlowerUseCase;
