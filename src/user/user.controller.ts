import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly notFound = (id) => {
    throw new HttpException(`The user with #${id} was not found`, 404);
  }

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll().catch((err) => {
      throw new NotFoundException(`Page was not found`)
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id).catch((err) => this.notFound(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id).catch((err) => this.notFound(id));
  }
}
