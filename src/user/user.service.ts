import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

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

  async create(dto: CreateUserDto) {
    const data : Prisma.UserCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      profiles: dto.profiles ? { create: dto.profiles } : {}
    };

    const createdUser = await this.prisma.user.create({data});
    return{
      ...createdUser,
      password: undefined,
      include: this._include
    };
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

  findByEmail(email: string){
    return this.prisma.user.findUnique({where: { email }})
  }

  async update(idUser: number, data: UpdateUserDto) {

    const updateUser = await this.prisma.user.update({
      where: { idUser },
      data
    })

    return{
      ...updateUser,
      password: undefined,
      include: this._include
    };
  }

  remove(idUser: number) {
    return this.prisma.user.delete({
      where: { idUser },
    });
  }
}
