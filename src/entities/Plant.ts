import { Garden } from "./Garden";

export interface Plant {
    id?: string;
    createdAt?: Date;
    name: string;
    days: number;
    waterPerSecond: number;
    garden: Garden;
}