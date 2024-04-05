import { randomUUID } from "node:crypto"

export class Book {
    public id: string
    public name: string
    public description: string
    public pagesNumber: number
    public price: number

    constructor(name: string, price:number, description: string, pagesNumber: number, id?: string){
        this.name = name 
        this.description = description
        this.pagesNumber = pagesNumber
        this.price = price
        this.id = id ?? randomUUID()
    }
}