export class User {
    username: string;
    password: string; 

    constructor(username:string, password:string) {
        this.username = username; 
        this.password = password; 
    }; 

    public static clone(user: User){
        let u: User = new User(user.username, user.password); 

        u.username = user.username; 
        u.password = user.password; 

        return u; 
    }
}