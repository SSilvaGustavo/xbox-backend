import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [UserModule, ProfileModule, GamesModule, GenreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
