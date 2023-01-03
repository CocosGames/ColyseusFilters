import { Room, Client } from "colyseus";
import { Dice } from "./schema/Dice";

export class MyRoom extends Room<Dice> {

  onCreate (options: any) {
    this.setState(new Dice());
    this.autoDispose = false;
    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
