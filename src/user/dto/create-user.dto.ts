import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, Validate, ValidateNested } from 'class-validator';
import { Cpf } from 'src/decorators/cpf.decorator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { User } from '../entities/user.entity';

export class CreateUserDto{
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

  @IsString()
  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @Cpf()
  cpf: string;

  @IsOptional()
  @IsBoolean()
  admin?: boolean;

  @ValidateNested({each:true})
  @Type(() => CreateProfileDto)
  @IsArray()
  @IsOptional()
  profiles?: CreateProfileDto[];
}