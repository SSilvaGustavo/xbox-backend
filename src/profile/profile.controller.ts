import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, NotFoundException } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  private readonly notFound = (id) => {
    throw new HttpException(`The user with #${id} was not found`, 404);
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.profileService.findAll().catch((err) => {
      throw new NotFoundException(`Page was not found`)
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(id).catch((err) => this.notFound(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.profileService.remove(id).catch((err) => this.notFound(id));
  }
}
