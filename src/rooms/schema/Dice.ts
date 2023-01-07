import {Schema, Context, type, filter} from "@colyseus/schema";
import {Client} from "colyseus";

export class Dice extends Schema {
    @type("string") status: string = "rolling";
    @type("string") result: string = "";
    @filter(function (this: Dice, client: Client, value: Dice['number'], root: Schema) {
        return this.status == "opened";
    })
    @type("uint8") number: number;

}