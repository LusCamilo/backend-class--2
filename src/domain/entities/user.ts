import { randomUUID } from "node:crypto";

export class User {
    public id: string
    public name: string
    public email: string
    public phoneNumber: string 
    
    constructor(name: string, email: string, phoneNumber: string ,id?: string) {
        this.email = email
        this.name = name
        this.phoneNumber = phoneNumber
        this.id = id ?? randomUUID()
    }
}