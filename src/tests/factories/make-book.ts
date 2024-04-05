import { faker } from "@faker-js/faker";
import { CreateBook } from "../../domain/services/create-book";
import { Book } from "../../domain/entities/book";

export function MakeBook(): Book {
    const book = new CreateBook().execute({
        description: faker.lorem.text(),
        name: faker.lorem.word(),
        pagesNumber: faker.number.int(),
        price: faker.number.float(),
    })
    return book
}