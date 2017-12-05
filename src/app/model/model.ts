import { IAppEntity } from './IAppEntity';

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    github?: {
        id: string,
        token: string
    };
}

/** Models a Markdown object */
export class Markdown implements IAppEntity {
    _id: string;
    title: string;
    author: string;
    fileName: string;
    description: string;
    content: string;
}

/** Models a Project object */
export class Project {
    _id?: string;
    name: string;
    members?: (User | string)[];
    admins?: (User | string)[];
}
