import { Device } from "../../entities/Device";
import pumpService from "../../services/device.service";

export class Update {
    constructor(private readonly pumpService: pumpService) {}
    async execute(pump: Partial<Device>)
    {
        return this.pumpService.update(pump);
    }
}