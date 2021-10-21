import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    games: {
      select: {
        idGame: true,
        title: true,
        cover: true,
        description: false,
        year: false,
        imdb: false,
        linkyt: false,
        linkgameplay: false
      },
    },
  };

  create(dto: CreateProfileDto, currentUser: User) {
    const data : Prisma.ProfileCreateInput = {
      ...dto,
      user :{
        connect: {
          idUser: currentUser.idUser
        }
      }
    }

    return this.prisma.profile.create({
      data,
    });
  }

  findAll(userId: number) {
    return this.prisma.profile.findMany({
      where: { userId },
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

    const discGamesIds = dto.disconnectGamesIds

    
    delete dto.gamesIds;

    delete dto.disconnectGamesIds
  

    const data: Prisma.ProfileUpdateInput = {
      ...dto,
      games: {
        connect: gamesIds?.map((gameId) => ({idGame: gameId})) || [],
        disconnect: discGamesIds?.map((gameId) => ({idGame: gameId})) || []
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
