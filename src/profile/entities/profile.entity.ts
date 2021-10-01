import { Prisma } from '@prisma/client';

export class Profile implements Prisma.ProfileUncheckedCreateInput{
    idProfile?: number;
    nickname: string;
    image: string;
    userId: number;
}
