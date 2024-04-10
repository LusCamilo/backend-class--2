import { CreateBook } from "../domain/services/create-book";
import { MakeBook } from "./factories/make-book";
import { it, expect } from "vitest";

it("should created a book", () => {
  const newBook = MakeBook();

  expect(typeof newBook.name).toBe("string");
  expect(typeof newBook.description).toBe("string");
  expect(typeof newBook.pagesNumber).toBe("number");
  expect(typeof newBook.price).toBe("number");
  expect(typeof newBook.id).toBe("string");
});

it("should created a specific book", () => {
  const bookData = {
    name: "clean code",
    description: "livro de programação",
    pagesNumber: 500,
    price: 10.0,
  };

  const newBook = new CreateBook().execute(bookData);

  expect(newBook.name).toBe("clean code");
  expect(newBook.description).toBe("livro de programação");
  expect(newBook.pagesNumber).toBe(500);
  expect(newBook.price).toBe(10.0);
});
