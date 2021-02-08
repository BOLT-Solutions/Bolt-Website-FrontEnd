import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    //for fade animation
    AOS.init();
    this.langHelper = this.LanguageService.initializeMode().services.mobile;
    this.direction = this.LanguageService.initializeMode().dir;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
