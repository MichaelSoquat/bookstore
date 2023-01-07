import { IUser } from '../interfaces/user';

export class User implements IUser {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}