import { User } from "@/entities/User";

export default class UserSevice {
    async create(newUser: User) {
        throw new Error('Método não implementado');
    }
    async findById(userId: number ){

    }

    async update(updatedFields: Partial<User>) {
        
    }
    async delete(userId: string) {

    }

    async generateToken() {
        
    }
}