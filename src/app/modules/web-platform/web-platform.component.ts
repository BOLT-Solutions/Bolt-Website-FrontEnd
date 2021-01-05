import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.scss']
})
export class WebPlatformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

}
