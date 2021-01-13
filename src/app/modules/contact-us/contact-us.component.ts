import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { langHelper } from '../../services/utilities/langHelper';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  langHelper;
  direction;
  contactRequestForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-,]+(\s{0,1}\[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-, ])*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^([0]{1}?[1]{1}?[0-2-5]{1}?[0-9]{8})$")]),
    productValue: new FormControl('',),
    message: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });




  constructor(public LanguageService: langHelper) { }
  flag: boolean = false;
  showOptions: boolean = false;
  show: boolean = true;
  stValue: any;
  ItemValue: any;

  status_values = [
  { id: 0, value: "In Progress" },
  { id: 1, value: "Completed" },
  { id: 2, value: "Closed" }];
  ngOnInit(): void {
    this.langHelper = this.LanguageService.initializeMode().contact;
    this.direction = this.LanguageService.initializeMode().dir;
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
  getItemValue(id: any) {
    this.ItemValue = this.status_values.find(b => b.id == id);
    console.log("status value ", this.ItemValue);
    this.stValue = this.ItemValue.value;
    this.showOptions = false;
    this.show = true;

  }
  get ContactFormValidation() {
    return this.contactRequestForm.controls;
  }


}
