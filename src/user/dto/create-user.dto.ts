import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString({message: "The name must be a String"})
  @IsNotEmpty({message: "The name cannot be empty"})
  name: string;

  @IsString({message: "The surname must be a String"})
  @IsOptional()
  surname: string;

  @IsEmail()
  @IsString({message: "The email must be a String"})
  @IsNotEmpty({message: "The email cannot be empty"})
  email: string;

  @IsNotEmpty({message: "The password cannot be empty"})
  password: string;

  @IsNotEmpty({message: "The cpf cannot be empty"})
  cpf: string;

  @IsOptional()
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
