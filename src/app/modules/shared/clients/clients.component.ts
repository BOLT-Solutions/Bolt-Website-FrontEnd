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
    console.log("animation")
    AOS.init({
 
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation

    });

  }

}
