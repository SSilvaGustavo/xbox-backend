import { Profile } from "src/profile/entities/profile.entity";

export class User {
  idUser?: number;
  name: string;
  surname?: string;
  email: string;
  password: string;
  cpf: string;
  admin?: boolean;
  profiles?: Profile[];
}
