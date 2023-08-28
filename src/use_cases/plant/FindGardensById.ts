import PlantService from "@/services/plant.service";

export class FindGardensById {
    constructor(private readonly plantService: PlantService) {}
    async execute(plantId: string){
        return this.plantService.findGardensById(plantId);
    }
}