import { Schedule } from "@/entities/Schedule";

export default class ScheduleService {
    async create(newSchedule: Schedule) {
        throw new Error('Método não implementado');
    }
    async findByIdAndUser(userId: number ){

    }
    async fetchAll(){

    }
    async update(updatedFields: Partial<Schedule>) {
        
    }
    async delete(userId: Partial<Schedule>) {

    }
}