import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    games: {
      select: {
        title: true,
        cover: false,
        description: false,
        year: false,
        imdb: false,
        linkyt: false,
        linkgameplay: false
      },
    },
  };

  create(dto: CreateProfileDto) {
    const data : Prisma.ProfileCreateInput = {
      ...dto,
      user :{
        connect: {
          idUser: dto.user
        }
      }
    }

    return this.prisma.profile.create({
      data,
    });
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: this._include,
    });
  }

  findOne(idProfile: number) {
    return this.prisma.profile.findUnique({
      where: { idProfile },
      include: this._include,
      rejectOnNotFound: true
    });
  }

  update(idProfile: number, dto: UpdateProfileDto) {
    const gamesIds = dto.gamesIds

    delete dto.gamesIds;


    const data: Prisma.ProfileUpdateInput = {
      ...dto,
      user:{
        connect: {
          idUser: dto.user
        }
      },
      games: {
        connect: gamesIds?.map((gameId) => ({idGame: gameId})) || [],
        },
      }
      
    return this.prisma.profile.update({
      where: { idProfile },
      data,
      include: this._include
    });
  }

  remove(idProfile: number) {
    return this.prisma.profile.delete({
      where: { idProfile },
    });
  }
}
