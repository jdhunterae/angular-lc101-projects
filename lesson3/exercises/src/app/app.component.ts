import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";

  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );

    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    this.color = "green";
    this.height = 0;
    this.message = "The shuttle has landed.";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");

    if (result) {
      this.color = "red";
      this.height = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let movement = parseInt(rocketImage.style.left) + 10;
      rocketImage.style.left = `${movement}px`;
      this.width += 10000;
    } else if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10;
      rocketImage.style.left = `${movement}px`;
      this.width -= 10000;
    }

    if (direction === "up") {
      this.height += 10000;
    } else if (direction === "down") {
      this.height -= 10000;
    }

    this.checkFlightStatus(rocketImage);
  }

  checkFlightStatus(rocketImage) {
    let left = parseInt(rocketImage.style.left);
    let bottom = parseInt(rocketImage.style.bottom);

    if (left < 0 || left > 450) {
      this.color = "orange";
      return;
    }

    if (bottom < 0 || bottom > 100) {
      this.color = "orange";
      return;
    }
 
    this.color = "blue";
  }
}
