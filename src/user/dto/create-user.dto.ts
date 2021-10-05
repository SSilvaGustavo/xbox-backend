import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, Validate, ValidateNested } from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
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

  @ValidateNested({each:true})
  @Type(() => CreateProfileDto)
  @IsArray()
  @IsOptional()
  profiles?: CreateProfileDto[];
}