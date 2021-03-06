import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService){}

  create(dto: CreateGenreDto) {

    const data: Prisma.GenreCreateInput = {
      ...dto,
    }

    return this.prisma.genre.create({
      data,
    });
  }

  findAll() {
    return this.prisma.genre.findMany({

    });
  }

  findOne(idGenre: number) {
    return this.prisma.genre.findUnique({
      where: {idGenre},
      rejectOnNotFound: true
    });
  }

  update(idGenre: number, data: UpdateGenreDto) {
    return this.prisma.genre.update({
      where: {idGenre},
      data,
    });
  }

  remove(idGenre: number) {
    return this.prisma.genre.delete({
      where: {idGenre}
    });
  }
}
