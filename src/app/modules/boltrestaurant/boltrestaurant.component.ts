import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-boltrestaurant',
  templateUrl: './boltrestaurant.component.html',
  styleUrls: ['./boltrestaurant.component.scss']
})
export class BOLTRESTAURANTComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().products.restaurant;
    this.direction = this.LanguageService.initializeMode().dir;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }

}
