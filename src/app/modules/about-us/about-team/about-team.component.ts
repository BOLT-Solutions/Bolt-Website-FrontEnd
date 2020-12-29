import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {

  //Animation
  animation: string;

  constructor() { }

  ngOnInit(): void {
    this.animation = ''
  }

  DisplayTeam(selector) {
    if (this.animation == '') {
      this.animation = 'displayTeam'
    }
    else if (this.animation == 'displayTeam') {
      this.animation = 'hideTeam'
    }
    if (selector == "tech") {
      document.getElementById('dynamicTeam').style.display = 'block';
    }
  }
}
