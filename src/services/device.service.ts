import { Device } from "../entities/Device";
import { API_PORT, API_URL } from "../utils/constants";

export default class DeviceService {
    async create(newDevice: Device): Promise<Device> {
        const { name, isWorking, serialID, user  } = newDevice;
            const response = await fetch(
              'http://localhost:3000/users/64dd3a166566cdf859439c85/devices',
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    createdAt: new Date(),
                    name: name,
                    serialID: serialID,
                    isWorking: isWorking,
                  }),
                }
            );
           const responseJSON = await response.json();
           const responseStatus = response.status;
           if (responseStatus !== 200) throw new Error(responseJSON.message);
           return responseJSON;
    }

    async findById(DeviceId: string): Promise<Device>{
        const response = await fetch(
            `${API_URL}:${API_PORT}/Devices/${DeviceId}`
          );
      
          const responseJSON = await response.json();
          const responseStatus = response.status;
          if (responseStatus !== 200) throw new Error(responseJSON.message);
          return responseJSON;
    }

    async update(updatedFields: Partial<Device>): Promise<Device>{
        const { _id, ...fieldsToUpdate } = updatedFields;

        const response = await fetch(
            `${API_URL}:${API_PORT}/Devices/${_id}`,
        {
            method: "PATCH",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(fieldsToUpdate),
        }
        );

        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }

    async deleteById(DeviceId: string){
        const response = await fetch(
            `${API_URL}:${API_PORT}/Devices/${DeviceId}`,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: DeviceId
              }),
            }
        );
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }

    async sendDeviceRequest(command: string, DeviceId: string){
        const response = await fetch(
          `http://localhost:3000/users/64dd3a166566cdf859439c85/devices/${DeviceId}/${command}`, {
          method: 'POST'
        });
      
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
      };

    async fetchAll(){
      const response = await fetch(`http://localhost:3000/users/64dd3a166566cdf859439c85/devices`, {
        method: 'GET',
        cache: 'no-store',
        next: {
          revalidate: 5,
        }
      });

      const responseJSON = await response.json();
      const responseStatus = response.status;
      if (responseStatus !== 200) throw new Error(responseJSON.message);
      return responseJSON.map((Device: { name: string; _id: any; isWorking: boolean; }) => ({ name: Device.name, id: Device._id, isWorking: Device.isWorking }));
    }
}