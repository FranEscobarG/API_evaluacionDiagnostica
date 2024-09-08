// CONTIENE LA INSTANCIA DE TODAS LAS DEPENDENCIAS QUE SE ESTARAN UTILIZANDO
import CreateOrderUseCase from "../application/create-order-usecase";
import DeleteOrderUseCase from "../application/delete-order-usecase";
import GetOrderByIdUseCase from "../application/get-orderById-usecase";
import GetOrderListUseCase from "../application/get-orderList-usecase";
import UpdateOrderUseCase from "../application/update-order-usecase";
import OrderController from "./controllers/order-controller";
import { MySQLOrderRepository } from "./databases/mysql/mysql-order-repository";

const mysqlOrderRepository = new MySQLOrderRepository; 

export const getOrderListUseCase = new GetOrderListUseCase(
  mysqlOrderRepository
);

export const createOrderUseCase = new CreateOrderUseCase(
  mysqlOrderRepository
);

export const getOrderByIdUseCase = new GetOrderByIdUseCase(
  mysqlOrderRepository
);

export const updateOrderUseCase = new UpdateOrderUseCase(
  mysqlOrderRepository
);

export const deleteOrderUseCase = new DeleteOrderUseCase(
  mysqlOrderRepository
);

export const orderController = new OrderController(
  getOrderListUseCase, 
  createOrderUseCase, 
  getOrderByIdUseCase, 
  updateOrderUseCase, 
  deleteOrderUseCase
); 
