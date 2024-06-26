import { IWarrior } from "./interfaces";
import { Katana } from "../katana";

export class Ninja implements IWarrior{
    private katana : Katana;
    constructor(){
        this.katana = new Katana();
    }
    public fight():string{
        return this.katana.useWeapon();
    }
}