import { Game } from "src/games/entities/game.entity";

export class Profile{
    idProfile?: number;
    nickname: string;
    image?: string;
    userId: number;
    games?: Game[]
}
