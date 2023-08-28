import DeviceService from "../../services/device.service";

export class FetchAll {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(){
        return this.pumpService.fetchAll();
    }
}