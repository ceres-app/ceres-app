import PlantService from "@/services/plant.service";

export class FetchAll {
    constructor(private readonly plantService: PlantService) {}
    async execute(){
        return await this.plantService.fetchAll();
    }
}