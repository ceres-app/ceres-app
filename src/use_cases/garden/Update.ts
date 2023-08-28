import { Garden } from "@/entities/Garden";
import GardenService from "../../services/garden.service";

export class Update {
    constructor(private readonly gardenService: GardenService) {}
    async execute(garden: Partial<Garden>)
    {
        return this.gardenService.update(garden);
    }
}