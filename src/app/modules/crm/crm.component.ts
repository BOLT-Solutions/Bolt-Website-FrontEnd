import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CRMComponent implements OnInit {
  langHelper;
  direction;
  constructor(public LanguageService: langHelper) { }

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().services.crm
    this.direction = this.LanguageService.initializeMode().dir;
  }

}
