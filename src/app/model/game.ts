export class Game {
    id: number;
    slug: string;
    name: string;
    release: string;
    background: string; 
    status?: string;

    constructor(
        id: number,
        slug:string,
        name: string,
        release: string,
        background: string,
        status?: string
    ){
        this.id = id; 
        this.slug = slug;
        this.name = name; 
        this.release = release;
        this.background = background;
        this.status = status;
    }

    public static clone(game: Game){
        let g: Game = new Game(game.id, game.slug, game.name, game.release, game.background); 

        g.id = game.id;
        g.slug = game.slug;
        g.name = game.name;
        g.release = game.release;
        g.background = game.background;
        g.status = game.status; 
        return g; 
    }
}