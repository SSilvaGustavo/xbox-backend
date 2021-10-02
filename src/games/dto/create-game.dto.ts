import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    cover: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    year: number;

    @IsNumber()
    @IsNotEmpty()
    imdb: number;

    @IsString()
    @IsOptional()
    linkyt: string;

    @IsString()
    @IsNotEmpty()
    linkgameplay: string;

    @IsString()
    @IsOptional()
    profile?: Prisma.ProfileCreateNestedManyWithoutGamesInput;

    @IsString()
    @IsOptional()
    genre?: Prisma.GenreCreateNestedManyWithoutGamesInput;
}
