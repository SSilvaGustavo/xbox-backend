import { Genre } from "src/genre/entities/genre.entity";

export class Game{
    idGame?: number;
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    linkyt?: string;
    linkgameplay: string;
    genre?: Genre[]
}
