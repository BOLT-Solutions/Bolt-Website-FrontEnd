import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../../services/utilities/langHelper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  langHelper;
  direction;
  constructor(public LanguageService: langHelper) { }
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().Partners;
    this.direction = this.LanguageService.initializeMode().dir;
  }

}
