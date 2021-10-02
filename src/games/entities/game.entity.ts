import { Prisma } from "@prisma/client";

export class Game implements Prisma.GamesCreateInput{
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    linkyt: string;
    linkgameplay: string;
    profile?: Prisma.ProfileCreateNestedManyWithoutGamesInput;
    genre?: Prisma.GenreCreateNestedManyWithoutGamesInput;
}
