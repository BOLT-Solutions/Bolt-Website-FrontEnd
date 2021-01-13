import { Component, OnInit } from '@angular/core';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-boltsalon',
  templateUrl: './boltsalon.component.html',
  styleUrls: ['./boltsalon.component.scss']
})
export class BOLTSALONComponent implements OnInit {

  constructor(public LanguageService: langHelper) { }
  langHelper;
  direction;
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().products.salon;
    this.direction = this.LanguageService.initializeMode().dir;
  }

}
