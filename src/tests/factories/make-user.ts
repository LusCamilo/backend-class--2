import { faker } from "@faker-js/faker";
import { CreateUser } from "../../domain/services/create-user";
import { User } from "../../domain/entities/user";

export function MakeUser(): User {
    const user = new CreateUser().execute({
        email: faker.internet.email(),
        name: faker.internet.userName(),
        phoneNumber: faker.phone.number("55 11 #####-####")
    })
    return user
}