import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { UpdateGameDto } from 'src/games/dto/update-game.dto';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends CreateProfileDto{
    @IsInt({ each: true })
    @IsArray()
    @IsOptional()
    gamesIds?: number[]

    @IsInt({ each: true })
    @IsArray()
    @IsOptional()
    disconnectGamesIds?: number[]

}
