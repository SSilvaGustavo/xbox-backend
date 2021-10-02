import { Prisma } from "@prisma/client";

export class Genre implements Prisma.GenreCreateInput{
    name: string;
    games?: Prisma.GamesCreateNestedManyWithoutGenreInput;
}
