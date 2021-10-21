import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";
import { CreateGenreDto } from "src/genre/dto/create-genre.dto";
import { Game } from "../entities/game.entity";

export class CreateGameDto{
    @IsString({message: "The title must be a String"})
    @IsNotEmpty({message: "The title cannot be empty"})
    title: string;

    @IsNotEmpty({message: "The cover cannot be empty"})
    @IsString({message: "The cover must be a String"})
    cover: string;

    @IsString({message: "The description must be a String"})
    @IsNotEmpty({message: "The description cannot be empty"})
    description: string;

    @IsInt({message: "The year must be a Int"})
    @IsNotEmpty({message: "The year cannot be empty"})
    year: number;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty({message: "The IMDB cannot be empty"})
    imdb: number;

    @IsString({message: "The Youtube link must be a String"})
    @IsOptional()
    linkyt: string;

    @IsString({message: "The Gameplay link must be a String"})
    @IsNotEmpty({message: "The Gameplay link cannot be empty"})
    linkgameplay: string;


    // @IsOptional()
    // @ValidateNested({each: true})
    // @IsArray()
    // @Type(() => CreateGenreDto)
    // genre?: CreateGenreDto[];
    
    @IsInt({ each: true })
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMaxSize(2)
    genreIds: number[];
}
