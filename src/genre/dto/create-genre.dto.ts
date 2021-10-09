import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto{
    @IsString({message: "The name must be a String"})
    @IsNotEmpty({message: "The name cannot be empty"})
    name: string;

}
