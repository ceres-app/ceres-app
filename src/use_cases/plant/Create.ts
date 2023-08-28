import { Plant } from "@/entities/Plant";
import PlantService from "@/services/plant.service";

export class Create {
    constructor(private readonly plantService: PlantService) {}
    async execute(newPlant: Plant){
        return this.plantService.create(newPlant);
    }
}