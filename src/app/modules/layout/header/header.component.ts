import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  //Style Variables
  languageStyle: string = "lang-default";

  routerUrl: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
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
    document.getElementById(selector).classList.add('active'); // Add active class
  }


  //Adjust language button
  AdjustLanguageButton(selector) {
    console.log(selector);
    if (selector == 'news') {
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
}
