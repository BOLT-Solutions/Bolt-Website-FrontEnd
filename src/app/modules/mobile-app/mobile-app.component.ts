import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //for fade animation
    AOS.init();

  }

}
