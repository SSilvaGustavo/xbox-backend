import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsInt()
  user: Prisma.UserCreateNestedOneWithoutProfilesInput;

  @IsOptional()
  games?: Prisma.GamesCreateNestedManyWithoutProfileInput;
}
