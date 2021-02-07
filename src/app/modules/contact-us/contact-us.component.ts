import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ContactRequestModel } from 'src/app/models/http-models/ConatctRequestModel';
import { langHelper } from '../../services/utilities/langHelper';
import { ContactUsService } from '../../services/ContactUsService';

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

  constructor(public LanguageService: langHelper, private ContactUsService: ContactUsService) { }

  flag: boolean = false;
  showOptions: boolean = false;
  show: boolean = true;
  stValue: string;
  ItemValue: any;

  //Contact request response .
  responseMessage: any;

  //Contact request object .
  ContactRequestModel: ContactRequestModel;

  status_values = [
    { id: 0, value: "ERP" },
    { id: 1, value: "Website Platform" },
    { id: 2, value: "Mobile Application" },
    { id: 2, value: "ATM" },
    { id: 2, value: "Data Center Network" },
    { id: 2, value: "Digital Transformation Services" },
    { id: 2, value: "Tailored Solutions" },
    { id: 2, value: "Bolt Doctor" },
    { id: 2, value: "Bolt Salon" },
    { id: 2, value: "Bolt Restaurant" },
    { id: 2, value: "Bolt ERP" }
  ];

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


  SubmitContactRequest () {

    console.log(this.stValue);

    const sendContactRequestFormData = this.contactRequestForm.value;

    if(this.stValue == null)
    {
      this.responseMessage = "failure";
    }
    else
    {
      if(this.contactRequestForm.valid)
      {
        const contactRequestToSubmit: ContactRequestModel = {
          email: sendContactRequestFormData.email,
          name: sendContactRequestFormData.fullname,
          phoneNumber: sendContactRequestFormData.phoneNumber,
          productName: this.stValue,
          message: sendContactRequestFormData.message
        }

        console.log(contactRequestToSubmit);
  
        this.ContactUsService.CreateContactRequest(contactRequestToSubmit).subscribe(res => {
          if (res.succeeded) {
            this.responseMessage = "success";
          }
        }, error => {
          this.responseMessage = "failure";
        });
  
      }
      else 
      {
        this.responseMessage = "failure";
      }
    }

  }


}
