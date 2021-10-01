import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  idUser?: number;
  name: string;
  surname?: string;
  email: string;
  password: string;
  cpf: string;
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
