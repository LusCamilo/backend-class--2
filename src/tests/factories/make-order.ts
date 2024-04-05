import { faker } from "@faker-js/faker";
import { CreateOrder } from "../../domain/services/create-order";
import { Order } from "../../domain/entities/order";

export function MakeOrder(): Order {
    const order = new CreateOrder().execute({
        bookId: faker.string.uuid(),
        userId: faker.string.uuid(),
    })
    return order
}