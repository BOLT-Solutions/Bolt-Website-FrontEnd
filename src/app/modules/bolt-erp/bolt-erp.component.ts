import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-bolt-erp',
  templateUrl: './bolt-erp.component.html',
  styleUrls: ['./bolt-erp.component.scss']
})
export class BoltErpComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().products.erp;
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
