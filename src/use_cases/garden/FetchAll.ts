import GardenService from "@/services/garden.service";

export class FetchAll {
    constructor(private readonly gardenService: GardenService) {}
    async execute(){
        return this.gardenService.fetchAll();
    }
}