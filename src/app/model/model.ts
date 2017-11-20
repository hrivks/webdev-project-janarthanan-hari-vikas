import { IAppEntity } from './IAppEntity';

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username: string;
    password: string;
    name: string;
    email?: string;
}
