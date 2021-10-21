import { PartialType } from '@nestjs/mapped-types';
import { ArrayNotEmpty, IsArray, IsInt, IsOptional } from 'class-validator';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends CreateGameDto{
    idGames: number[];

    @IsInt({ each: true })
    @IsArray()
    @ArrayNotEmpty()
    @IsOptional()
    disconnectGenreIds?: number[];
}
