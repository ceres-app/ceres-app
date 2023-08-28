import { Garden } from "@/entities/Garden";
import { Plant } from "@/entities/Plant";
import { API_PORT, API_URL } from "@/utils/constants";

export default class PlantService {
    async create(newPlant: Plant): Promise<Plant> {
        const { name, garden, waterPerSecond, days } = newPlant;
            const response = await fetch(
                `${API_URL}:${API_PORT}/gardens/${garden.id}/plants`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    garden: garden,
                    days: days,
                    waterPerSecond: waterPerSecond,
                  }),
                }
            );
           const responseJSON = await response.json();
           const responseStatus = response.status;
           if (responseStatus !== 200) throw new Error(responseJSON.message);
           return responseJSON;
    }

    async findById(PlantId: string): Promise<Plant>{
        const response = await fetch(
            `${API_URL}:${API_PORT}/plants/${PlantId}`
          );
      
          const responseJSON = await response.json();
          const responseStatus = response.status;
          if (responseStatus !== 200) throw new Error(responseJSON.message);
          return responseJSON;
    }

    async findGardensById(plantId: string): Promise<Garden[]>{
      const response = await fetch(
          `${API_URL}:${API_PORT}/plants/${plantId}/gardens`
        );
    
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
  }

    async update(updatedFields: Partial<Plant>): Promise<Plant>{
        const { id, ...fieldsToUpdate } = updatedFields;

        const response = await fetch(
            `${API_URL}:${API_PORT}/plants/${id}`,
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

    async deleteById(plantId: string){
        const response = await fetch(
            `${API_URL}:${API_PORT}/plants/${plantId}`,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: plantId
              }),
            }
        );
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }

    async fetchAll(){
      const response = await fetch(`${API_URL}:${API_PORT}/plants`, {
        method: 'GET'
      });

      const responseJSON = await response.json();
      const responseStatus = response.status;
      if (responseStatus !== 200) throw new Error(responseJSON.message);
      return responseJSON.map((plant: { name: string; _id: any; isWorking: boolean; }) => ({ name: plant.name, _id: plant._id, isWorking: plant.isWorking }));
    }
}