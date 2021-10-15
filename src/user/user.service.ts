import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  private readonly _include = {
    profiles: {
      select: {
        nickname: true,
        image: true,
      }
    }
  };

  create(dto: CreateUserDto) {
    const data : Prisma.UserCreateInput = {
      ...dto,
      profiles: dto.profiles ? { create: dto.profiles } : {}
    };
    return this.prisma.user.create({
      data,
      include: this._include
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: this._include
    });
  }

  findOne(idUser: number) {
    return this.prisma.user.findUnique({
      where: { idUser },
      include: this._include,
      rejectOnNotFound: true
    });
  }

  update(idUser: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { idUser },
      data,
      include: this._include
    });
  }

  remove(idUser: number) {
    return this.prisma.user.delete({
      where: { idUser },
    });
  }
}
