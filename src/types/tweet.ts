import { User } from "./user";

export interface Tweet extends User {
    id: string;
    message: string;
    time: number;
}