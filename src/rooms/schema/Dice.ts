import {Schema, Context, type} from "@colyseus/schema";
import {Client} from "colyseus";

export class Dice extends Schema {
    @type("boolean") opened: boolean = false;
    @filter(function (this: Dice, client: Client, value: Dice['number'], root: Schema) {
        return this.opened;
    })
    @type("uint8") number: number;
}