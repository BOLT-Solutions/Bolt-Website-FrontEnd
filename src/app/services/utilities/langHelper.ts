import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class langHelper  {

  //Get current language variable from Local Storage
  currentLang = (/true/i).test(localStorage.getItem("enLang"));


  constructor(private router: Router) {
  }

  ngOnInit() {
    //Define default language variable
    if (localStorage.getItem("enLang") === null)
      localStorage.setItem("enLang", "true")
    else
      //Set language
      this.currentLang = (/true/i).test(localStorage.getItem("enLang"))
  }



  //Initialize language variables
  initializeMode() { 
    if (this.currentLang) {
      return {
        image: 'Image',
      }
    }
    else if (!this.currentLang) {
      return {
        image: 'صورة',
      }
    }
  }

  // switch lang
  switchLang() {
    if (this.currentLang) {
      localStorage.setItem("enLang", "false")
      window.location.reload();

    }
    else {
      localStorage.setItem("enLang", "true")
      window.location.reload();

    }
  }
}


