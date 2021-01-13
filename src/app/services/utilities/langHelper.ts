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
            h1: 'Enterprise Resource Planning ( ERP )',
            p: 'Enterprise Resource Planning (ERP), it’s a software that merges differentmodules into one complete system that streamline process and information across the entire organization.These core constructs are then interconnected with business processesdriven by workflows across business departments(e.g., Finance, Inventory, human resources, CRM, marketing, operations),connecting systems and the people who use them.'
          },
          platform: {

          },
          mobile: {

          },
          atm: {
            h1: ' ATM Cleaning Machine Monitoring System',
            p:'Using this system, you can monitor the maintenance process of your ATM from anywhere.'

          },
          DCN: {
            h1: 'Data Center Network',
            p: "we support the servers, switches, hubs, and infrastructure of the network preference.Also providing the database backup & recovery of the company's valuable data."
          },
          digital: {
            h1: 'Digital Transformation',
            p: 'Keeping up with the digital transformation initiatives by providing our clients what make them updated with new digital trends using our digital services'
          },
          tailored: {
            h1: 'Tailored Solutions',
            p:' Based on your business need we can create suitable solutions that integrate your business.'
          },
          footer: {

          },
        },
        products: {
          doctor: {
            header:
            {
              h1: "BOLT DOCTOR",
              p: 'It is a Web-based application that allows individuals to book appointments online through any web-connected device, such as a computer, laptop, smartphone, or tablet.It lets the client choose from different doctors, Specialty,how long is he going to wait and how much is he going to pay.Moreover, the system is integrated with third - party companies so that the customer can give feedback about his experience.' 
            },
            cards:
            {
              card1:
              {
                title: 'Saves your staff time',
                desc:'An automated system saves valuable working time for medical staff.'
              },
              card2:
              {
                title: 'Gives your Visitors more choices',
                desc: 'visitor can choose from different doctors in the same specialty, view the profile of the doctor,add a Payment option, fill in Feedback forms, also they can get reminders of the appointment.'
              }
              ,
              card3:
              {
                title: 'Saves Resources',
                desc: ' The expenses accepted for manual appointments and bookings are suspended.'
              }
              ,
              card4:
              {
                title: 'Automated reminders',
                desc: ' The reminders on automated systems reduce the incidences of missed appointments by approximately 50%.'
              }
              ,
              card5:
              {
                title: 'Flexible to use',
                desc: ' Book anytime, Patients are not limited to any specific office-timings, and can be done around the clock, from anywhere.'
              }
              ,
              card6:
              {
                title: 'Online booking',
                desc: ' Making online appointments saves patients from the hassles and enhances their experience.'
              }
              ,
              card7:
              {
                title: 'Efficient Information Management',
                desc: ' Managing vital information online lets you manage them efficiently and more accurately.'
              }

            }

          },
          salon: {
            header:
            {
              h1: "BOLT SALON",
              p: ' It’s a web development system that helps the customer to have a better experience than any traditional barbers.It lets the client choose his barber, the type of service he wants, how long is he going to wait and how much is he going to pay.Moreover,the system is integrated with third - party companies so that the customer can give feedback about his experience.Not only the customer who is going to gain from this system but also the owner too by providing the oversee of barbers,the ques, reports, and the feedback reviews.'
            },
            cards:
            {
              card1:
              {
                title: 'Time-saving',
                desc: ' Save time for the customer because of the queuing system.'
              },
              card2:
              {
                title: 'Automated reminders',
                desc: ' The reminders on automated systems reduce the incidences of missing the reservation.'
              }
              ,
              card3:
              {
                title: 'More than a choice',
                desc: '  Allows the client to choose the barber.'
              }
              ,
              card4:
              {
                title: 'Customer Feedback',
                desc: ' Your customer can send feedback about his experience.'
              }
              ,
              card5:
              {
                title: 'Satisfaction',
                desc: 'Increase customer satisfaction and get more loyal customers.'
              }
              ,
              card6:
              {
                title: 'Monitoring',
                desc: '  Helps the manager to monitor the invoices.'
              }
              ,
              card7:
              {
                title: 'Saving Resources',
                desc: ' The expenses accepted for manual appointments and bookings are suspended.'
              }
              ,
              card8:
              {
                title: 'More Data',
                desc: ' Build your customer database.'
              }

            }

          },
          restaurant: {
            header:
            {
              h1: "BOLT RESTAURANT",
              p: 'Bolt Restaurant is an application that provides a unique experience for restaurant involved parties starting from Admin/Owner, Waiter, and Ends-user/ Customer.'
            },
            cards:
            {
              card1:
              {
                title: 'Ease of use',
                desc: ' QR code to view the system, friendly to deal with the system, (simple steps to get the service) facilitating the customer way of ordering in a well-organized and systematic flow.'
              },
              card2:
              {
                title: 'Safety',
                desc: 'Especially in COVID-19 pandemic as the system makes sure that the health and safety regulations are considered as simply avoiding crowd and hassle of disordering conflict.'
              }
              ,
              card3:
              {
                title: 'Customer satisfaction',
                desc: 'Since the business techniques and methods for providing a service are improved, therefore the customer will be more satisfied. (All you need by one click).'
              }
        

            }

          },
          erp: {
            header:
            {
              h1: "BOLT ERP",
              p: ' Enterprise Resource Planning (ERP), it’s a software that merges different modules into one complete system that streamline process and information across the entire organization.These core constructs are then interconnected with business processes driven by workflows across business departments(e.g., Finance, Inventory, human resources, CRM, marketing, operations), connecting systems and the people who use them.'
            },
            cards:
            {
              card1:
              {
                title: 'Better Reporting',
                desc: 'A significant part of wastefulness in operational work originates from improper reporting.'
              },
              card2:
              {
                title: 'Data Quality',
                desc: ' ERP system improves data quality by improving the underlying process, as result it makes a better decision than the traditional approach.'
              }
              ,
              card3:
              {
                title: 'Business Analytics',
                desc: ' having high-quality data gives the business the power of intelligent analytics tools to arrive at better business decision.'
              }
              ,
              card4:
              {
                title: 'Scalability',
                desc: 'ERP system is easily upgradeable, which means that it can add new features to the system as the business needs, this leads to easy management of new features.'
              }
              ,
              card5:
              {
                title: 'Lower cost of operations',
                  desc: 'introduces base innovation in managing resources, which eliminates delays and this leads to reduction- the cost of operations.'
              }
              ,
              card6:
              {
                title: 'Improved CRM',
                desc: 'the direct benefit of using a good ERP system is improved customer relations as a result of better business process.'
              }
              

            }
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


