import DeviceService from "../../services/device.service";

export class SenDeviceRequest {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(command: string, pumpId: string){
        return this.pumpService.sendDeviceRequest(command, pumpId);
    }
}