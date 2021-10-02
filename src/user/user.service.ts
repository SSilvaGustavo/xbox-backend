import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    profiles:{
      select:{
        idProfile: true,
        nickname: true
      }
    }
  };

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
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
    });
  }

  remove(idUser: number) {
    return this.prisma.user.delete({
      where: { idUser },
    });
  }
}
