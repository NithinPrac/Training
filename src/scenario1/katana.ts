import { IWeapon } from "./interfaces";

export class Katana implements IWeapon{
    public useWeapon(): string {
        return "Katana is used!";
    }
}