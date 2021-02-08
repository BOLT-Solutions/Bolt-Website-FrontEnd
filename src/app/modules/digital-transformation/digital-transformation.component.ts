import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-digital-transformation',
  templateUrl: './digital-transformation.component.html',
  styleUrls: ['./digital-transformation.component.scss']
})
export class DigitalTransformationComponent implements OnInit {
  constructor(public LanguageService: langHelper) { }

  langHelper;
  direction;

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().services.digital
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }
}
