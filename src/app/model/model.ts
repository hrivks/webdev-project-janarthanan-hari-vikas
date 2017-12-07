/** Models a User object */
export class User {
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
export class Markdown {
    _id?: string;
    editedBy?: string;
    fileName: string;
    content: string;
    editedOn?: string;
}

/** Models a Project object */
export class Project {
    _id?: string;
    name: string;
    description?: string;
    members?: (User | string)[];
    admins?: (User | string)[];
    markdown: string;
    gitRepo?: string;
}
