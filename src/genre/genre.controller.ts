import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, NotFoundException } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}
  
  private readonly notFound = (id) => {
    throw new HttpException(`The user with #${id} was not found`, 404);
  }

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.genreService.findAll().catch((err) => {
      throw new NotFoundException(`Page was not found`)
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(+id).catch((err) => this.notFound(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id).catch((err) => this.notFound(id));
  }
}
