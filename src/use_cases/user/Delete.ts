import UserService from "@/services/user.service";

export class Delete {
    constructor(private readonly userService: UserService) {}
    async execute(userId: string){
        return this.userService.delete(userId);
    }
}