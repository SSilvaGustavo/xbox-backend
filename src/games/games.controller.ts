import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, NotFoundException, HttpCode, HttpStatus} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  private readonly notFound = (id) => {
    throw new HttpException(`The user with #${id} was not found`, 404);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll().catch((err) => {
      throw new NotFoundException(`Page was not found`)
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id).catch((err) => this.notFound(id))
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id).catch((err) => this.notFound(id));
  }
}
