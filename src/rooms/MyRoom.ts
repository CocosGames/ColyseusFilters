import { Room, Client } from "colyseus";
import { Dice } from "./schema/Dice";

export class MyRoom extends Room<Dice> {

  onCreate (options: any) {
    this.setState(new Dice());

    this.onMessage("guess", (client, message) => {
      if (message == "+" && this.state.number>=4 || message=="-" && this.state.number<=3)
        this.state.result = "win";
      else
        this.state.result = "lose";
      this.state.status = "opened"
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.lock();
    this.state.number = Math.floor(Math.random() * 6) + 1;
    this.state.status = "guessing";
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
