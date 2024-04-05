import { randomUUID } from "node:crypto";

export class Order {
    public id: string
    public userId: string
    public bookId: string
    
    constructor(userId: string, bookId: string, id?: string) {
        this.bookId = bookId
        this.userId = userId
        this.id = id ?? randomUUID()
    }
}