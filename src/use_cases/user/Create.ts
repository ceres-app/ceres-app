import { User } from "@/entities/User";
import UserService from "@/services/user.service";

export class Create {
    constructor(private readonly userService: UserService) {}
    async execute(newUser: User){
        return this.userService.create(newUser);
    }
}