import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.scss']
})
export class WebPlatformComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    AOS.init();
    this.langHelper = this.LanguageService.initializeMode().services.platform;
    this.direction = this.LanguageService.initializeMode().dir;

  }

}
