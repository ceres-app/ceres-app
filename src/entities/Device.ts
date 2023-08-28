import { User } from "./User";

export interface Device {
    id?: string;
    createdAt?: Date;
    serialID: string;
    name: string;
    isWorking: boolean;
    user: User;
}
