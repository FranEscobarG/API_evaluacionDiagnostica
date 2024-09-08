import { FlowerRepository } from "../domain/ports/flower-repository";

class GetFlowerByIdUseCase {
  constructor(private readonly flowerRepository: FlowerRepository) {}

  async run(flowerId: string) {
    const flower = await this.flowerRepository.getById(flowerId);

    if (!flower) {
      throw new Error(`Id: ${flowerId} de publicacion no encontrada`); //Lanza el error
    }
    console.log(flower);
    
    return flower;
  }
  
}

export default GetFlowerByIdUseCase;
