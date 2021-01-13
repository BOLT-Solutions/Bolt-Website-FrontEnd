import { Component, OnInit, ViewChild } from '@angular/core'; //View Child for accessing children components
import { Router } from '@angular/router';
import { content } from '../../models/http-models/content';
import { HomeService } from '../../services/home-service';
import { langHelper } from '../../services/utilities/langHelper';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Declare services
  constructor(private router: Router, private HomeService: HomeService, public LanguageService: langHelper) { }

  //Models and DTOs
  content: content;
  contents: Array<content> = new Array<content>();
  //Translation Variables
  langHelper;
  direction;

  //Shared components declarations
  @ViewChild(ModalComponent) modal: ModalComponent;

  ngOnInit(): void {
    //Translation
    this.langHelper = this.LanguageService.initializeMode().home;
    this.direction = this.LanguageService.initializeMode().dir;


  }

  //Filter Solution Images
  ViewSolution(selector) {
    //clear active selection on title
    var title_list = document.getElementsByClassName('solution-tab'); // fetch all title list items
    for (let i = 0; i < title_list.length; i++) { 
      if (title_list[i].classList.contains('active')) {
        title_list[i].classList.remove('active');
      }
    }
    document.getElementById(selector).classList.add('active'); // append active class to selected item

    var solution_items = document.getElementsByClassName("news-container"); // Fetch all solutions
    if (selector != 'all') {
      for (let i = 0; i < solution_items.length; i++) {
        solution_items[i].parentElement.style.display = 'none';
      }
      var selectedSolutions = document.querySelectorAll("[data-id = '" + selector + "']");
      for (let i = 0; i < selectedSolutions.length; i++) {
        selectedSolutions[i].parentElement.style.display = 'block';
      }
    }
    else {
      for (let i = 0; i < solution_items.length; i++) {
        solution_items[i].parentElement.style.display = 'block';
      }
    }

  }
}
