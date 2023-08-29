
export interface Device {
    _id?: string;
    createdAt?: Date;
    serialID: string;
    name: string;
    isWorking: boolean;
    user: string;
}
