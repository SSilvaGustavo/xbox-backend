import { Prisma } from '@prisma/client';
import { HttpCode, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService){}

  private readonly _include =  {
    genre: {
      select:{
        idGenre: true,
        name: true,
      }
    },
    profile:{
      select:{
        idProfile: true,
        nickname: true
      }
    },
  }

  create(dto: CreateGameDto) {

    const genreId = dto.genreIds;

    delete dto.genreIds;

    const data: Prisma.GamesCreateInput = {
        ...dto,
        genre:{
          connect: genreId.map((genreId) => ({idGenre: genreId}))
        }
    }

    return this.prisma.games.create({
      data,
    })
  }

  findAll() {
    return this.prisma.games.findMany({
      include: this._include,
    })
  }

  findOne(idGame: number) {
    return this.prisma.games.findUnique({
      where: {idGame},
      include: this._include,
      rejectOnNotFound: true
    })
  }

  update(idGame: number, dto: UpdateGameDto) {
    const genresIds = dto.genreIds
    
    const disconnectGenresIds = dto.disconnectGenreIds

    delete dto.genreIds

    delete dto.disconnectGenreIds


    const data: Prisma.GamesUpdateInput = {
      ...dto,
      genre: {
        connect: genresIds?.map((genreId) => ({idGenre: genreId})) || [],
        disconnect: disconnectGenresIds?.map((genreId) => ({idGenre: genreId})) || [],
      }
      
    }

    return this.prisma.games.update({
      where: {idGame},
      data,
      include: this._include
    })
  }

  // updateDel(idGame: number, dto: UpdateGameDto) {
  //   const genresIds = dto.genreIds

  //   delete dto.genreIds

  //   const data: Prisma.GamesUpdateInput = {
  //     ...dto,
  //     genre: {
  //       disconnect: genresIds?.map((genreId) => ({idGenre: genreId})) || [],
  //     }
      
  //   }

  //   return this.prisma.games.update({
  //     where: {idGame},
  //     data,
  //     include: this._include
  //   })
  // }

  remove(idGame: number) {
    return this.prisma.games.delete({
      where: {idGame},
    })
  }
}
