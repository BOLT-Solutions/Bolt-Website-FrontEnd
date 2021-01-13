import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class langHelper  {

  //Get current language variable from Local Storage
  currentLang ;

  constructor(private router: Router) {
    //Define default language variable
   
    if (localStorage.getItem("Lang")===null) {
      localStorage.setItem("Lang", "en")
      this.currentLang = 'en'

    }
    else
    //Set language
    {
      this.currentLang = localStorage.getItem("Lang")
    }
  }
    
  ngOnInit() {

  }

  //Initialize language variables
  initializeMode() {
    console.log('init')
    if (this.currentLang === 'en') {
      return {
        dir: 'ltr',
        layout: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          products: 'Products',
          contactus: 'Contact Us',
          language: 'العربيه',

          category: 'Category',
          link: 'Link',
          marketing: 'Marketing',
          branding: 'Branding',
          seo: 'SEO',
          webDesign: 'Web Design',
          video: 'Video',

        },
        home: {
          header: {
            h1_1: 'Feel comfortable',
            h1_2: ' when you meet excellence',
            paragraph: 'Bolt Solutions is an established Software house in Egypt with a commitment to align employee development with the overall company culture and operating systems. We will help empower people and businesses alike on a scientific basis, through the provision of optimally tailored solutions that are targeted to business excellence.',
            classes: {
              header_class: '',
              paragraph_class: ''
            },
          },
          SectionOne: {
            h1_1: 'We Create Digital Solutions That Help',
            h1_2: ' The Business Leaders To Monitor More',
            h1_3: ' To Have The Full Control.',
            Userfriendly: 'User friendly',
            Responsive: 'Responsive',
            Fullycustomized: 'Fully customized',
            VastProductPortfolio: 'Vast product portfolio'
          },
          SectionTwo: {
            h1: 'Our Solutions',
            h2_1: 'Show All',
            h2_2: 'Solutions',
            h2_3: 'Services',
            atm: 'ATM cleaning machine monitoring system',
            Tailored: 'Tailored solutions',
            Digital: 'Digital transformation',
            DataCenter: 'Data Center',
            Website: 'Website Platform',
            ERP: 'ERP',
            Mobile: 'Mobile Application',
            Boltssalon: 'Bolts salon',
            doctor: 'Bolts doctor',
            Restaurant: 'Bolts Restaurant',
            Bolt_ERP: 'Bolts ERP '
          },
          readMore: 'Read More',
        },
        about: {
          company: {
            content: {
              h1: 'More Than Just A Website',
              p:'If you can dream it, we can build it…'
            },
            siteContent: {
              h1: '  We Are the Best Accounting Agency.',
              p: ' We can be your consultant, not only your service provider.Bolt Solutions is an established Software house in Egypt with resources / offices in Dubai and Birmingham, UK.With a commitment to align employee development with the overall company culture and operating systems.We will help empower people and businesses alike on a scientific basis,through the provision of optimally tailored solutions from our leading experts around the world.',
              h3: 'Vision Statement:',
              p2: ' Simply put, Bolt Solutions is one of the fastest growing software companies in the northern hemisphere.Aiming to becoming the leading performer, recognizing all customer landscapes in this global market place, serving numerous industries and sectors all over the world.',
              p3: 'If you can dream it, we can build it…',
              h3_2: 'Mission Statement:',
              p4: 'We exist to assist the digital transformation of one-man bands, to SME’s and large blue-chip companies bringing them all into the 21st Century! Our highly skilled experts pave the way for our clients to evolve.Our mission is to enable all people and businesses throughout the world to realize their full potential, accelerating organizations digital transition.The transition in turn will enhance business growth of our customers with our creative solutions and design.To have a pro- active work ethic combined with professionality, our outlook is highly profitable and inevitable.',

            },
            board: {
              h1: ' Our Board Members',
              h3: 'With our experts we can make a difference.',
              h2_1: 'Andrew Rooney',
              p: ' Remodeling Consultant With a decade at BuidWall and a lifetime in the industry, Andrew Rooney has been an invaluable…',


            }
          },
          team: {

          }
        },
        services: {
          erp: {

          },
          platform: {

          },
          mobile: {

          },
          atm: {

          },
          DCN: {

          },
          digital: {

          },
          tailored: {

          },
          footer: {

          },
        },
        products: {
          doctor: {

          },
          salon: {

          },
          restaurant: {

          },
          erp: {

          }
        },
        contact: {
          contactHeading: "Let's get in touch",
          contactBody: 'Ask us any question ,We are here to help.',
          contact_data: '1171 Building , Road 9,El- Mokattam, Cairo, Egypt.',
          ContactHeading2: 'Contact Us With',
          NameValidation: 'Please enter your name',
          arabicOrEngValidation: 'Only arabic and english letters are allowed',
          MoreThanLetters: 'Name letters must be more than 3 letters',
          LessThanLetters: 'Name letters must be less than 20 letters',
          EmailRequired: 'Email is required.',
          EmailValidation: ' Email must be in a correct format (Ex: email@provider.com)',
          phoneNumberRequired: ' Kindly enter your phone number.',
          PhoneNumberValidation: 'Please enter a valid phone number.',
          FullNamePlaceholder: 'Full Name',
          EmailPlaceholder: 'E-mail',
          PhoneNumberPlaceholder: 'Phone Number',
          productPlaceHolder: 'Product Name',
          MessagePlaceHolder: 'Your Message :',
          MessageRequired: 'Message is required.',
          SendButton: 'SEND MESSAGE',
          Emirates: 'United Arab Emirates',
          Egypt: 'Egypt'
        },
        footer: {
          customText: 'We exist to assist the digital transformation of one-man bands,to SME’s and large blue- chip companies bringing them all into the 21st Century. Our highly skilled experts pave the way for our clients to evolve.',
          categroy: {
            Category: 'Category',
            MarketingLi: 'Marketing',
            BrandingLi: 'Branding',
            SEOLi: 'SEO',
            WebDesignLi: 'Web Design',
            VideoLi: 'Video',

          },
          Link: {
            linkName: 'Link',
            BrandingLi: 'Branding',
            SEOLi: 'SEO & SMM',
            GraphicLi: 'Graphic'
          },
          Services: {
            ServicesName: 'Services',
            MarketingLi: 'Marketing',
            BrandingLi: 'Branding',
            SEOLi: 'SEO',
            WebDesignLi: 'Web Design',
            VideoLi: 'Video',
          }
        },
        Clients: {
          h1: 'We are proud to share our clients',
          p: ' we reach our business goals via in-depth communication and trust with our clients, we build rapport with them to meet their requirements ultimately reachinga close partnership together for future repeat business.'
        }
      }
    }
    else if (this.currentLang==='ar') {
      return {
        dir: 'rtl',
        layout: {
          home: 'الرئيسية',
          about: 'من نحن',
          services: 'الخدمات', 
          products: 'المنتجات',
          contactus: 'التواصل معنا',
          language: 'English',

          category: 'أنواع',
          link: 'رابط',
          marketing: 'التسويق',
          branding: 'ترويج',
          seo: 'المدير التنفيذي',
          webDesign: 'تصميم الويب',
          video: 'فيديو',

        },
        home: {
          header: {
            h1_1: 'تشعر بالراحه عندما',
            h1_2: 'تقابل التميز',
            paragraph: 'تسريع أداء فريقك من خلال التعيين المهام والتواصل وتتبع التقدم في واحد من أوائل تطبيقات مكان. هل تعلم أننااستضافة الاتحاد الأوروبي لدينا المهور لتقديم خياالعملاء الأوروبيون.',
            classes: {
              header_class: 'arabicH1',
              paragraph_class: 'arabic_paragraph'
            },
          },
          readMore: 'المزيد',
        },
        about: {
          company: {

          },
          team: {

          }
        },
        services: {
          erp: {

          },
          platform: {

          },
          mobile: {

          },
          atm: {

          },
          DCN: {

          },
          digital: {

          },
          tailored: {

          },

        },
        products: {
          doctor: {

          },
          salon: {

          },
          restaurant: {

          },
          erp: {

          }
        },
        contact: {

        }

      }
    }
  }

  // switch lang
  switchLang() {
    if (this.currentLang==='en') {
      localStorage.setItem("Lang", "ar")
      window.location.reload();
    }
    else {
      localStorage.setItem("Lang", "en")
      window.location.reload();
    }
  }
}


