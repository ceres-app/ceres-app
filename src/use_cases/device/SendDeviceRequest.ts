import DeviceService from "../../services/device.service";

export class SendDeviceRequest {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(command: string, pumpId: string){
        return await this.pumpService.sendDeviceRequest(command, pumpId);
    }
}