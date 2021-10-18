import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Public()
    @Post('login')
    login(@Body() dto:LoginDto){
        return this.authService.login(dto);
    }

}
    
