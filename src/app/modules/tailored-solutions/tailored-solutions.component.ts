import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-tailored-solutions',
  templateUrl: './tailored-solutions.component.html',
  styleUrls: ['./tailored-solutions.component.scss']
})
export class TailoredSolutionsComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().services.tailored
    this.direction = this.LanguageService.initializeMode().dir;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
