import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../../services/utilities/langHelper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  langHelper;
  direction;
  constructor(public LanguageService: langHelper) {

  }

  ngOnInit(): void {

    this.langHelper = this.LanguageService.initializeMode().footer;
    this.direction = this.LanguageService.initializeMode().dir;
  }

}
