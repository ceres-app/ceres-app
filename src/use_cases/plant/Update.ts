import { Plant } from "@/entities/Plant";
import PlantService from "../../services/plant.service";

export class Update {
    constructor(private readonly plantService: PlantService) {}
    async execute(plant: Partial<Plant>)
    {
        return this.plantService.update(plant);
    }
}