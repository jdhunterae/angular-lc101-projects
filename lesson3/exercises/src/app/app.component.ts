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
  upEnabled: boolean = true;
  downEnabled: boolean = true;
  leftEnabled: boolean = true;
  rightEnabled: boolean = true;

  wDangerMax = 450;
  wDangerMin = 0;
  hDangerMax = 310;
  hDangerMin = 0;

  wFailureMax = 460;
  wFailureMin = -10;
  hFailureMax = 320;
  hFailureMin = 0;

  handleTakeOff(rocketImage) {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );

    if (result) {
      this.color = "blue";
      this.height = 10000;
      rocketImage.style.bottom = "10px";
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
      this.resetFlightControls();
    }
  }

  handleLanding(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");

    this.color = "green";
    this.height = 0;
    this.message = "The shuttle has landed.";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
    this.shiftToSafety(rocketImage);
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");

    if (result) {
      this.color = "red";
      this.height = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
      this.shiftToSafety(rocketImage);
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let left = parseInt(rocketImage.style.left) + 10;
      rocketImage.style.left = `${left}px`;
      this.width += 10000;
    } else if (direction === "left") {
      let left = parseInt(rocketImage.style.left) - 10;
      rocketImage.style.left = `${left}px`;
      this.width -= 10000;
    }

    if (direction === "up") {
      let bottom = parseInt(rocketImage.style.bottom) + 10;
      rocketImage.style.bottom = `${bottom}px`;
      this.height += 10000;
    } else if (direction === "down") {
      let bottom = parseInt(rocketImage.style.bottom) - 10;
      rocketImage.style.bottom = `${bottom}px`;
      this.height -= 10000;
    }

    this.checkFlightStatus(rocketImage);
  }

  shiftToSafety(rocketImage) {
    let left = parseInt(rocketImage.style.left);
    let bottom = parseInt(rocketImage.style.bottom);

    bottom = Math.min(this.hDangerMax, bottom);
    bottom = Math.max(this.hDangerMin, bottom);

    left = Math.min(this.wDangerMax, left);
    left = Math.max(this.wDangerMin, left);

    rocketImage.style.bottom = `${bottom}px`;
    rocketImage.style.left = `${left}px`;
  }

  resetFlightControls() {
    this.upEnabled = true;
    this.downEnabled = true;
    this.leftEnabled = true;
    this.rightEnabled = true;
  }

  checkFlightStatus(rocketImage) {
    let approachingDanger = false;
    let left = parseInt(rocketImage.style.left);
    let bottom = parseInt(rocketImage.style.bottom);

    this.resetFlightControls();

    if (left < this.wDangerMin) {
      approachingDanger = true;

      if (left < this.wFailureMin) {
        this.leftEnabled = false;
      }
    }
    if (left > this.wDangerMax) {
      approachingDanger = true;

      if (left > this.wFailureMax) {
        this.rightEnabled = false;
      }
    }

    if (bottom <= this.hDangerMin) {
      approachingDanger = true;
      if (bottom > this.hFailureMin) {
        this.downEnabled = false;
      }
    }

    if (bottom > this.hDangerMax) {
      approachingDanger = true;

      if (bottom > this.hFailureMax) {
        this.upEnabled = false;
      }
    }

    if (approachingDanger) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}
