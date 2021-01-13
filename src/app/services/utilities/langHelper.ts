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
    if (this.currentLang==='en') {
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
          readMore: 'Read More',
        },
        about:{
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


