import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
  constructor(public LanguageService: langHelper) { }

  langHelper;
  direction;

  ngOnInit(): void {
    
    this.langHelper = this.LanguageService.initializeMode().services.atm
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
