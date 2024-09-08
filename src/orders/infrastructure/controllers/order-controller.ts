import { Request, Response, NextFunction } from 'express';
import CreateOrderUseCase from '../../application/create-order-usecase';
import GetOrderListUseCase from '../../application/get-orderList-usecase';
import GetOrderByIdUseCase from '../../application/get-orderById-usecase';
import UpdateOrderUseCase from '../../application/update-order-usecase';
import DeleteOrderUseCase from '../../application/delete-order-usecase';

class UserController {
  constructor(
    private getOrderListUseCase: GetOrderListUseCase,
    private createOrderUseCase: CreateOrderUseCase,
    private getOrderByIdUseCase: GetOrderByIdUseCase,
    private updateOrderUseCase: UpdateOrderUseCase,
    private deleteOrderUseCase: DeleteOrderUseCase
  ) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orderPayload = req.body;
      const order = await this.createOrderUseCase.execute(orderPayload);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await this.getOrderListUseCase.execute();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const order = await this.getOrderByIdUseCase.run(req.params.id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orderId = req.params.id;
      const orderPayload = req.body;
      const updatedOrder = await this.updateOrderUseCase.execute(orderId, orderPayload);
      res.json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orderId = req.params.id;
      const result = await this.deleteOrderUseCase.execute(orderId);
      res.status(result ? 200 : 404).json({ success: result });
    } catch (error) {
      next(error);
    }
  }
  
}

export default UserController;
