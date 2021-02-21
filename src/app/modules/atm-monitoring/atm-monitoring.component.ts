import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-atm-monitoring',
  templateUrl: './atm-monitoring.component.html',
  styleUrls: ['./atm-monitoring.component.scss']
})
export class AtmMonitoringComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }

  langHelper;
  direction;

  ngOnInit(): void {

    this.langHelper = this.LanguageService.initializeMode().services.atm2
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
