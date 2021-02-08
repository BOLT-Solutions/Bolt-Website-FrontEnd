import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';


@Component({
  selector: 'app-boltdoctor',
  templateUrl: './boltdoctor.component.html',
  styleUrls: ['./boltdoctor.component.scss']
})
export class BOLTDOCTORComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().products.doctor;
    this.direction = this.LanguageService.initializeMode().dir;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);

  }

}
