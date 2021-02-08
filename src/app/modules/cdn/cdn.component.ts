import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-cdn',
  templateUrl: './cdn.component.html',
  styleUrls: ['./cdn.component.scss']
})
export class CdnComponent implements OnInit {
  constructor(public LanguageService: langHelper) { }

  langHelper;
  direction;

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().services.DCN
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }
}
