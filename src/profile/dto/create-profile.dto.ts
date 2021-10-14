import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, IsString, isString, ValidateNested } from 'class-validator';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto{
  @IsString({message: "The nickname must be a String"})
  @IsNotEmpty({message: "The nickname cannot be empty"})
  nickname: string;

  @IsString({message: "The image must be a String"})
  @IsNotEmpty({message: "The image cannot be empty"})
  image: string;
  
  @IsInt()
  user: number;
  
  // @IsOptional()
  // @IsArray()
  // @ValidateNested({each:true})
  // @Type(() => CreateGameDto)
  // games?: CreateGameDto[];
}
