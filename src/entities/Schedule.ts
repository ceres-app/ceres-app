import { Plant } from "./Plant";
import { User } from "./User";

export interface Schedule {
    id?: string;
    createdAt?: Date;
    user: User;
    plant: Plant;
    time: Date;
}
