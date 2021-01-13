import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../../services/utilities/langHelper';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  langHelper;
  direction;
  constructor(public LanguageService: langHelper) { }

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().about;
    this.direction = this.LanguageService.initializeMode().dir;

  }

}
