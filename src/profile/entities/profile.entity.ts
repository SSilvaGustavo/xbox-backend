import { Prisma } from '@prisma/client';

export class Profile implements Prisma.ProfileCreateInput{
    nickname: string;
    image: string;
    user: Prisma.UserCreateNestedOneWithoutProfilesInput;
    games?: Prisma.GamesCreateNestedManyWithoutProfileInput;
}
