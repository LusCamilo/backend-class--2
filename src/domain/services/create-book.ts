import { Book } from "../entities/book";

export interface CreateBookServiceRequest {
  name: string;
  price: number;
  description: string;
  pagesNumber: number;
  book_id?: string;
}

export class CreateBook {
    execute({
        description,
        name,
        pagesNumber,
        price,
        book_id
    }: CreateBookServiceRequest){
        const book = new Book(name, price, description, pagesNumber, book_id)
        return book
    }
}
