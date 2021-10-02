import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString({message: "The nickname must be a String"})
  @IsNotEmpty({message: "The nickname cannot be empty"})
  nickname: string;

  @IsString({message: "The image must be a String"})
  @IsNotEmpty({message: "The image cannot be empty"})
  image: string;

  @IsNotEmpty({message: "The user cannot be empty"})
  @IsInt({message: "The userId must be a Int"})
  user: Prisma.UserCreateNestedOneWithoutProfilesInput;

  @IsOptional()
  games?: Prisma.GamesCreateNestedManyWithoutProfileInput;
}
