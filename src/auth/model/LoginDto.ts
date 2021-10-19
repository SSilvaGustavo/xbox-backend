import { IsEmail, IsString, Length, Matches, MinLength } from "class-validator";

export class LoginDto{
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Weak Password',
      })
    password: string;
}