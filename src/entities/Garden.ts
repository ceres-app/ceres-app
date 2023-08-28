import { Device } from "./Device";

export interface Garden {
    id?: string;
    createdAt?: Date;
    name: string;
    device: Device;
}