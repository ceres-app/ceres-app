import DeviceService from "@/services/device.service";

export class Delete {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(pumpId: string){
        return this.pumpService.deleteById(pumpId);
    }
}