import { it, expect } from "vitest";
import { MakeOrder } from "./factories/make-order";
import { CreateOrder } from "../domain/services/create-order";

it("should created a order", () => {
  const newOrder = MakeOrder();

  expect(typeof newOrder.bookId).toBe("string");
  expect(typeof newOrder.userId).toBe("string");
  expect(typeof newOrder.id).toBe("string");
});

it("should created a specific order", () => {

  const orderData = {
    bookId: "1",
    userId: "2",
  };

  const newOrder = new CreateOrder().execute(orderData);

  expect(newOrder.bookId).toBe("1");
  expect(newOrder.userId).toBe("2");
  expect(typeof newOrder.id).toBe("string");
});
