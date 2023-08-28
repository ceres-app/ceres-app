import DeviceService from "@/services/device.service";

export class FindById {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(pumpId: string){
        return this.pumpService.findById(pumpId);
    }
}