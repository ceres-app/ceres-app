import GardenService from "@/services/garden.service";

export class Delete {
    constructor(private readonly gardenService: GardenService) {}
    async execute(gardenId: string){
        return this.gardenService.deleteById(gardenId);
    }
}