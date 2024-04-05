import { Order } from "../entities/order";

interface CreateOrderServiceRequest {
  userId: string;
  bookId: string;
  order_id?: string;
}

export class CreateOrder {
  execute({
    bookId,
    userId,
    order_id,
  }: CreateOrderServiceRequest) {
    const order = new Order(userId, bookId, order_id);
    return order;
  }
}
