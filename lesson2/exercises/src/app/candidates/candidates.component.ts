import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot"
   editMissionName = false;

   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  showSendButton(person: object) {
    if (!person) {
      return false;
    }

    if (this.crew.length >= 3) {
      return false;
    }

    if (this.crew.includes(person)) {
      return false;
    }

    return true;
  }

  addToCrew(person: object)   {
    if (!person || this.crew.includes(person)) {
      return;
      }

      this.crew.push(person);
   }

   changeMissionName(event) {
    this.missionName = event.target.value;
    this.editMissionName = false;
   }

  ngOnInit() {
  }

  // BONUS: Code the changeMissionName function here:


}
