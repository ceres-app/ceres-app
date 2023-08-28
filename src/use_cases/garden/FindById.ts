import GardenService from "../../services/garden.service";

export class FindById {
    constructor(private readonly gardenService: GardenService) {}
    async execute(gardenId: string){
        return this.gardenService.findById(gardenId);
    }
}