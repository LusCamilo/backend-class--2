import { User } from "../entities/user";

interface CreateUserServiceRequest {
  name: string;
  email: string;
  phoneNumber: string;
  user_id?: string;
}

export class CreateUser {
    execute({
        email,
        name,
        phoneNumber,
        user_id
    }: CreateUserServiceRequest){
        const user = new User(name, email, phoneNumber, user_id)
        return user        
    }
}
