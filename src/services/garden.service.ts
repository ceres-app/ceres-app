import { Garden } from "../entities/Garden";
import { API_PORT, API_URL } from "../utils/constants";

export default class GardenService {
    async create(newGarden: Garden): Promise<Garden> {
        const { name } = newGarden;
            const response = await fetch(
                `${API_URL}:${API_PORT}/gardens`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name
                  }),
                }
            );
           const responseJSON = await response.json();
           const responseStatus = response.status;
           if (responseStatus !== 200) throw new Error(responseJSON.message);
           return responseJSON;
    }

    async findById(GardenId: string): Promise<Garden>{
        const response = await fetch(
            `${API_URL}:${API_PORT}/gardens/${GardenId}`
          );
      
          const responseJSON = await response.json();
          const responseStatus = response.status;
          if (responseStatus !== 200) throw new Error(responseJSON.message);
          return responseJSON;
    }

    async update(updatedFields: Partial<Garden>): Promise<Garden>{
        const { id, ...fieldsToUpdate } = updatedFields;

        const response = await fetch(
            `${API_URL}:${API_PORT}/gardens/${id}`,
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

    async deleteById(GardenId: string){
        const response = await fetch(
            `${API_URL}:${API_PORT}/gardens/${GardenId}`,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: GardenId
              }),
            }
        );
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }

    async fetchAll(){
      const response = await fetch(`${API_URL}:${API_PORT}/gardens`, {
        method: 'GET'
      });

      const responseJSON = await response.json();
      const responseStatus = response.status;
      if (responseStatus !== 200) throw new Error(responseJSON.message);
      return responseJSON.map((garden: { name: string; _id: any; isWorking: boolean; }) => ({ name: garden.name, _id: garden._id, isWorking: garden.isWorking }));
    }
}