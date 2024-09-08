import { Flower } from '../domain/flower';
import {FlowerRepository} from '../domain/ports/flower-repository';

class GetFlowerCatalogUseCase {
  constructor(private publicationRepository: FlowerRepository) {}

  async execute(): Promise<Flower[]> {
    return this.publicationRepository.getFlowerCatalog();
  }
}

export default GetFlowerCatalogUseCase;
