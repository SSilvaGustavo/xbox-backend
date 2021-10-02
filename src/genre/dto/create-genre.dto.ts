import { Prisma } from ".prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    @IsString({message: "The name must be a String"})
    @IsNotEmpty({message: "The name cannot be empty"})
    name: string;

    @IsOptional()
    genre: Prisma.GamesCreateNestedManyWithoutGenreInput
}
