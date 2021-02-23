import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { langHelper } from '../../../services/utilities/langHelper';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  langHelper;
  direction;
  constructor(public LanguageService: langHelper) { }

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().Clients;
    this.direction = this.LanguageService.initializeMode().dir;

    setInterval(() => { AOS.init({

      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation

    }); } , 400) 
  }
}
