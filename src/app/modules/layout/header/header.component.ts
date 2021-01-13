import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { langHelper } from '../../../services/utilities/langHelper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  //Style Variables
  languageStyle: string = "lang-default";

  routerUrl: string;


  //Translation Variables
  langHelper;
  direction;

  constructor(private router: Router, public LanguageService: langHelper) {
  }

  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().layout;
    this.direction = this.LanguageService.initializeMode().dir;

    //Set Header Activity
    this.ClearNavigationHighLight();
    var currentUrl = this.router.url.toString(); // Fetch current router link
    currentUrl = currentUrl.replace("/", "");
    this.AdjustLanguageButton(currentUrl);
    document.getElementById(currentUrl)?.classList.add('active'); // Append Selected class to clicked element
  }

  Navigate(selector) {

    this.ClearNavigationHighLight();
    this.router.navigate([selector]);
    this.AdjustLanguageButton(selector);
    if (selector == "about-us" || selector == "about-us/about-team") { // highlight about dropdown
      document.getElementById('about').classList.add('active');
    }
    else if (selector == 'MobileApp' || selector == 'ERP' || 
      selector == 'web' || selector == 'DCN' || selector == 'TailoredSolution' ||
      selector == 'DigitalTransformation' || selector == 'ATM' ) {
      document.getElementById('services').classList.add('active');
    }
    else if (selector == 'BoltSalon' || selector == 'BoltDoctor' || selector == 'BoltRestaurant' || selector == 'BoltERP') {
      document.getElementById('products').classList.add('active');
    }
    else {
      document.getElementById(selector).classList.add('active'); // Add active class
    }
    if (window.screen.width < 1025) {
      document.getElementById('responsiveButton').click();
    }
  }


  //Adjust language button
  AdjustLanguageButton(selector) {
    if (selector == 'news' || selector == 'web' || selector == 'MobileApp' ) {
      this.languageStyle = "lang-blue";
    }
    else {
      this.languageStyle = "lang-default";
    }
  }
  //Clear Highlighted class from navigation items
  ClearNavigationHighLight() {
    var nav_items = document.getElementsByClassName("nav-item"); // Fetch header list
    // Clear 'selected' class
    for (let i = 0; i < nav_items.length; i++) {
      if (nav_items[i].classList.contains('active')) {
        nav_items[i].classList.remove('active')
        return;
      }
    }
  }

  //MobileDropDown
  ViewNavBar() {
    var nav = document.getElementById('nav');
    if (nav.classList.contains('NavbarDropMobile')) {
      nav.classList.remove('NavbarDropMobile');
    }
    else {
      nav.classList.add('NavbarDropMobile');
    }

  }
}
