import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
      },
    },
  };

  create(data: CreateProfileDto) {
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

  update(idProfile: number, data: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { idProfile },
      data,
    });
  }

  remove(idProfile: number) {
    return this.prisma.profile.delete({
      where: { idProfile },
    });
  }
}
