import { Order } from '../domain/order';
import {OrderRepository} from '../domain/order-repository';

class GetOrderListUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(): Promise<Order[]> {
    return this.orderRepository.getAll();
  }
}

export default GetOrderListUseCase;
