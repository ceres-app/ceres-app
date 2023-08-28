import PlantService from "@/services/plant.service";

export class Delete {
    constructor(private readonly plantService: PlantService) {}
    async execute(plantId: string){
        return this.plantService.deleteById(plantId);
    }
}