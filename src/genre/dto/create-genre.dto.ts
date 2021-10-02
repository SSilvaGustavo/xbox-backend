import { Prisma } from ".prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    genre: Prisma.GamesCreateNestedManyWithoutGenreInput
}
