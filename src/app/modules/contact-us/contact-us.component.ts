import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  flag: boolean = false;
  showOptions: boolean = false;
  show: boolean = true;
  stValue: any;
  status_values = [
  { id: 0, value: "In Progress" },
  { id: 1, value: "Completed" },
  { id: 2, value: "Closed" }];
  ngOnInit(): void {
  }
  showOption() {

    if (this.flag == false) {
      this.showOptions = true;
      this.show = false;
      this.flag = true;
    }
    else {
      this.showOptions = false;
      this.show = true;
      this.flag = false;
    }

  }
  hideOption() {

    this.showOptions = false;
    this.show = true;
    this.flag = false;
  }

}