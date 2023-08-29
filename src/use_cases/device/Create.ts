import { Device } from "../../entities/Device";
import DeviceService from "../../services/device.service";

export class Create {
    constructor(private readonly pumpService: DeviceService) {}
    async execute(newDevice: Device){
        return await this.pumpService.create(newDevice);
    }
}