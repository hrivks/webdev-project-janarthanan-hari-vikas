/** Common properties of all model objects */
export interface IAppEntity {
    _id: string;
}

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email?: string;
}

