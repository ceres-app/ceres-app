import PlantService from "@/services/plant.service";

export class FindById {
    constructor(private readonly plantService: PlantService) {}
    async execute(plantId: string){
        return this.plantService.findById(plantId);
    }
}