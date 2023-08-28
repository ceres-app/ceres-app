import { Garden } from "@/entities/Garden";
import GardenService from "@/services/garden.service";

export class Create {
    constructor(private readonly gardenService: GardenService) {}
    async execute(newGarden: Garden){
        return this.gardenService.create(newGarden);
    }
}