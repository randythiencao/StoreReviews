export class User {

    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    roleId: number;

    constructor() {
    }

    public static isNull(user: User): boolean {
        return user.username === null &&
            user.password === null &&
            user.firstname === null &&
            user.lastname === null;
    }
}
