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
          font: '',
          textAlignStyle: '',
          dropDownStyle: 'dropdown-toggle',
          navStyle: '',
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
          aboutCompany: 'About Company',
          aboutTeam: 'About Team',
        },
        home: {
          backgroundImage: '', //Default image for EN
          font: '',
          textAlignStyle: '', //Default alignment left, empty for default alignment
          fontAlMarai: '', // For Arabic only
          header: {
            h1_1: 'Feel comfortable when you meet excellence',
            h1_2: '',
            paragraph: 'Bolt Solutions is an established Software house in Egypt with a commitment to align employee development with the overall company culture and operating systems – will be deleted ',
            classes: {
              header_class: '',
              paragraph_class: '',
              read_more_class: '',
            },
          },
          SectionOne: {
            h1_1: 'We Create Digital Solutions That Help',
            h1_2: 'The Business Leaders To Monitor More',
            h1_3: 'To Have The Full Control.',
            h1_4: 'Digitalization integrated into every aspect of your business, ensuring your digital transformation to the new age. ',
            Userfriendly: 'User friendly',
            Responsive: 'Responsive',
            Fullycustomized: 'Fully customized',
            VastProductPortfolio: 'Vast product portfolio',
            classes: {
              header_class: '',
              img_class: '',
            },
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
            CRM:'CRM',
            Mobile: 'Mobile Application',
            Boltssalon: 'Bolts salon',
            doctor: 'Bolts doctor',
            Restaurant: 'Bolts Restaurant',
            Bolt_ERP: 'Bolts ERP '
          },
          readMore: 'Read More',
        },
        about: {
          font: '',
          textAlignStyle: '',
          company: {
            content: {
              h1: 'More Than Just A Website',
              p:'If you can dream it, we can build it…'
            },
            siteContent: {
              h1: 'Welcome to our business.',
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
              h2_1: 'Muhammed Al Jammal',
              p: 'Deputy CEO & Chief operations officer',
              h2_2: 'Ibrahim Rashed',
              p1: 'Chairman',
              h2_3: 'Ahmed Abdel Moneim',
              p2: 'CEO',
            }
          },
          team: {
            content: {
              h1_1: 'Great Things In Business Are Never Done By One Person.',
              h1_2: "They're Done By A Team ",
            },
            board: {
              h1: 'We are proud to share our great team members.',
              h3:'We can all do small things, with great love, and together we can do something wonderful – OUR TEAMS'
            },
            h2: 'Ahmed Hassan',
            p: 'Technology Lead',
            h2_2: ' Mohammed Ragab',
            p2: ' Business Analyst',
            h2_3: 'Jamie Halpin',
            p3: 'Chief commercial & marketing officer ',
            technicalTeam: {
              h2: 'Yasmin Ghazy',
              p: 'Software Engineer',
              h2_2: 'Nader Hosny',
              h2_3: 'Moataz Yassin',
              h2_4: 'Ahmed El-Bandarawy',
              h2_5: 'Amr Moushtaha',
            },
            marketingTeam: {
              h2: 'Youssef Dawood',
              p: 'Creative Director',
              h2_2: 'Mohammed Tareq',
              p2: 'Visual Artist',
              h2_4: 'Mahmoud El- Fishawy',
              p2_3: ' Video Editor',
              h2_3:'Nuran Hisham',
              p4:'Graphic Designer'
            },
            SalesTeam: {
              h2: 'Mina Alfones ',
              p: 'Business development executive',
              h2_2: 'Shaimaa Ibrahim',
              p2: 'Sales team leader',
             
            },
            businessTeam: {
              h2: 'Mohammed Amin',
              p: 'Business Analyst',
              h2_2: 'Mohammed Hossam',
            },
            qaTeam: {
              h2: 'Mohammed Adel',
              p: 'QA/QC Lead',
            },
            uiTeam: {
              h2: 'Mohammed Medhat',
              p: ' UI/UX Designer',
            },
              pmTeam: {
                h2: 'Youssef Afifi',
                p: 'Project Manager',
                h2_2: 'Hiba Chnawra',
            }

          },
        },
        services: {
          erp: {
            h1: 'Enterprise Resource Planning ( ERP )',
            p: 'Enterprise Resource Planning (ERP), it’s software that merges different modules into one complete system, this streamlines process’s and information across the entire organization. These core constructs are then interconnected with business process’s driven by workflows across business departments (e.g. Accounts, Stocks, human resources, CRM, marketing, operations), connecting systems and the people who use them.',
            Benefits: 'General Benefits for an ERP:',
            benefitsWords: 'Efficient, lowers the costs and increases profit.',
            Features: 'Features of an ERP:',
            accountFeature: 'Account Module features: ',
            accountFeatures2:'Journal and Payment',
            accountFeatures3:'Billing',
            accountFeatures4:'Taxes',
            accountFeatures5:'Pricing',
            accountFeatures6:'Retail Operation',
            accountFeatures7:'Tools',
            accountFeatures8:'Reports',
            accountFeatures9:'Shareholder Management',
            textAlign: 'text-left',

          },
          platform: {
            header:
            {
              h1: "Website Platform",
              p: 'A website (also written as web site) is a collection of web pages and related content that is identified, domain name and published on one web server. This cements your business in cyber space leaving your mark in the online business market to enable you to work in the 21st century.',
              p2: 'E-Commerce websites are online portals that facilitate online transactions of your goods and your services',
              benefitsofWebiste: 'The Benefits of Having a Website for your Business:',
              benefitsofWebiste1:'Your business will stop being invisible.',
              benefitsofWebiste2:'The website will create another sales tool.',
              benefitsofWebiste3:'Build authority',
              benefitsofWebiste4:'Less Expensive for Advertising & Marketing.',
              benefitsofWebiste5:'24/7 access .',
              benefitsofWebiste6:'Worldwide presence.',
              benefitsofWebiste7:'Frequently Updates for the business status.',
              benefitsofWebiste8:'Brand awareness .',
              benefitsofWebiste9:'Free advertising.',
              benefitsofWebiste10:'Increasing target audience.',
            },
            cards:
            {
              card1:
              {
                title: 'Be visible to the world',
                desc: ' Your business will stop being invisible.'
              },
              card2:
              {
                title: 'More Sales',
                desc: 'The website will create another sales tool.'
              }
              ,
              card3:
              {
                title: 'accessibility',
                desc: 'be available for your customers and give them 24/7 access.'
              },
              card4:
              {
                title: 'Reach more clients',
                desc: 'Expand and increase the reaching and targeted potential clients.'
              }
              ,
            
              card5:
              {
                title: 'Smart view of your products',
                desc: ' Provide Sufficient analysis for the customers as a list of prices and product details and features.'
              }
              ,
              card6:
              {
                title: 'Cut your costs',
                desc: 'Reduce operation expenses for storing physical material with high cost, to an online solution that cuts cost.'
              }
              , card7:
              {
                title: 'More Analysis',
                desc: 'Analyze the geographic products data and other competitor’s status through a detailed market scan.'
              }


            }
          },
          mobile: {
            header:
            {
              h1: "Mobile Application",
              p: 'is a computer program or software application designed to run on a mobile device such as a phone or tablet? Apps are generally downloaded from application distribution platforms which are operating by the owner of the mobile operating system, such as the App Store (iOS) and Google Play Store(Android).',
              p2: 'If you can dream it, we can build it… ',
              features: 'Mobile application features',
              features1:'Simplicity',
              features2:'Speed',
              features3:'	Good image resolution',
              features4:'Flexibility analytics',
              features5:'Security',
              features6:'Search options',
              features7:'User feedback',
              features8: 'Integration',
              benefits: 'Mobile application benefits',
              benefits2: 'Mobile Apps are faster',
              benefits3: 'Personalized content',
              benefits4: 'Instant Online and Offline access',
              benefits5: 'Using device features',
              benefits6: 'Push Notifications and instant updates',
              benefits7: 'Branding and Design',
              benefits8: 'Productivity Improvement and Cost reduction',
              benefits9: 'Interactive Engagement',

            },
            cards:
            {
              card1:
              {
                title: 'Make it easy for your user',
                desc: 'Mobile Apps are faster, will use personalized content which will build a rapport between you and your customers,they will have instant online and offline access.'
              },
              card2:
              {
                title: 'Push Notifications and instant updates',
                desc: 'remind your users of your latest updates.'
              }
              ,
              card3:
              {
                title: 'Indirect marketing',
                desc: 'your application is integrated with your social media channels.'
              }
              ,
              card4:
              {
                title: 'Unique experience',
                desc: ' provide your customers with a simple application, with high speed, good image resolution, search options, and high security.'
              }
              
               

            }
          },
          atm: {
            h1: ' ATM Cleaning Machine Monitoring System',
            p2: 'This enables the digital transformation of ATM channel management and the monitoring solution.',
            p3: 'Increasing operational efficiency being automated and agile due to the collaboration between bank, branch and service providers, swiftly resolving all disputes.',
            Benefits: 'Benefits:',
            Benefits1:'Complete rounded solution for self-service channel management.',
            Benefits2:'Suitable for Banks, Independent ATM Deployers, ATM Managed Service Providers and other Financial Institutions. ',
            Benefits3:'Multi-Vendor Enterprise Solution – Can manage all brands of ATMs, Recyclers, Acceptors and Kiosks.',
            Benefits4:'Monitors self-service devices using CEN-XFS standard.',
            Benefits5:'Accepts multiple data feeds - Supports EFT Switch based monitoring also.',
            Benefits6:'PCI DSS Validated - User access control, encrypted data store, TLS/SSL communication, periodic vulnerability assessments.',
            Benefits7:'Integrated Analytics for Operations and Business Teams.',
            Benefits8:'Masterly crafted over an open-source technology platform.',

          },
          DCN: {
            h1: 'Data Center Network',
            p: "Data center is a pool of resources interconnected using a communication network. The network holds a pivotal role as it facilitates and centralizes an organization shared IT operations and equipment for the purpose of storing, processing and disseminating data and applications.",
            p2: "We support the servers, switches, hubs, and infrastructure of the network preference. Also providing the database backup & recovery of the company's valuable data.",
            Benefits: 'Benefits:',
            Benefits1:'Protecting Power',
            Benefits2:'Cutting costs',
            Benefits3:'Improving efficiency',
            Benefits4:'Making full use of in-house IT potential and HR',
          },
          digital: {
            h1: 'Digital Transformation',
            p: 'Keeping up with the digital transformation initiatives by providing our clients what make them updated with new digital trends using our digital services'
          },
          tailored: {
            h1: 'Tailored Solutions',
            p:' Based on your business need we can create suitable solutions that integrate your business.'
          },
          crm: {
            h1: ' Customer Relationshio Management',
            p2: 'Basically, CRM (Customer Relationship Management) essentially provides a central place where your business can store customer and prospect data, track customer interactions, and share this information with colleagues. It allows businesses to manage relationships with customers, helping the business grow.',
            Benefits: 'General Benefits CRM:',
            Benefits1: 'Reduce cost by being effective and efficient with operations, enhancing communications, automatic reminders, making all of customer information and records by making them digital which saves money and time. ',
            Benefits2: 'Increase customer satisfaction by getting them exactly what they need',
            Benefits3: 'Sharing the information among the sales team ',
            Benefits4: 'Long-term profitability and sustainability ',
            Benefits5: 'Better data organization (leads, contacts, customers)',
           
          },
        },
        products: {
          doctor: {
            header:
            {
              h1: "BOLT DOCTOR",
              p: 'It is a Web based application that allows individuals to book appointments online through any web-connected device, such as a computer, laptop, smartphone or tablet. It lets the client choose from different doctors, how long is he going to wait and how much is he going to pay. Moreover, the system is integrated with third-party companies so that the customer can give feedback about his experience. ',
              Benefits: 'Benefits',
              Benefits1: 'An automated system saves valuable working time of medical staff.',
              Benefits2: 'Saves Resources - The expenses accepted for manual appointments and bookings are suspended. ',
              Benefits3: 'The reminders on automated systems reduce the incidences of missed appointments by approximately 50%.',
              Benefits4: 'Book anytime, from anywhere patients are not limited to any specific office-timings and bookings can be done round the clock at any time, from anywhere.',
              Benefits5: 'A more convenient approach going online for all parties. People take alternative to online transactions for a safer, convenient and smoother way of life. Making online appointments saves patients from the hassles and enhances their experience.',
              Benefits6: 'Efficient Information Management: An online system effectively registers all vital information of patients allowing you to give up from manual entries resulting in chances of errors. Managing vital information online lets you manage them efficiently and more accurately.',
              Benefits7: 'Kiosk software/ QR Code at the clinic to confirm the booking by entering the name of patient or scan the QR Code',
              Features: 'Features',
              Features7: 'Online booking',
              Features1: 'Choosing from different doctors in the same specialty',
              Features2: 'View the profile of the doctor',
              Features3: 'Payment Option ',
              Features4: 'Feedback forms',
              Features5: 'Reminders of the appointment ',
              Features6: 'Shows the average waiting time for every doctor ',


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
              p: 'It’s a web development system that helps the customer to have a better experience than any traditional barbers. It lets the client choose his barber, the type of service he wants, how long is he going to wait and how much is he going to pay. Moreover, the system is integrated with third-party companies so that the customer can give feedback about his experience. Not only the customer who is going to gain from this system but also the owner too by providing a birds’ eye view of barbers, the queues, reports and the feedback reviews.',
              benefitsforCustomer: 'Benefits for customer',
              benefitsforCustomer1:'Save time for the customer because of queuing system',
              benefitsforCustomer2:'The reminders on automated systems reduce the incidences of missing the reservation',
              benefitsforCustomer3:'Allows the client to choose the barber',
              benefitsforCustomer4:'Send feedback about his experience',
              benefitsforCustomer5: 'Increase Customer satisfaction',
              BenefitsforAdmin: 'Benefits for Admin',
              BenefitsforAdmin1: 'Helps the manager to monitor the invoices',
              BenefitsforAdmin2: 'Saves Resources: The expenses accepted for manual appointments and bookings are suspended.',
              BenefitsforAdmin3: 'Control the Inventory and manage the retail',
              BenefitsforAdmin4: 'Build customer database',
              BenefitsforAdmin5: 'Improve service quality',
              BenefitsforAdmin6: 'Increase Customer Loyalty',
              BenefitsforAdmin7: 'Improve staff efficiency',
              FeaturesForAdmin: 'Features for Admin ',
              FeaturesForAdmin1: 'Showing how many barbers are working and their status ',
              FeaturesForAdmin2: 'Integration with third-party companies for ex: SMS, Email, banks, etc. ',
              FeaturesForAdmin3: 'Illustration the services that was done by the client ',
              FeaturesForAdmin4: 'Feedback management to help the manager know which barber has more ratings  ',
              FeaturesForAdmin5: 'Shows the invoices that was made through the day.',
              FeaturesForAdmin6: 'Service management as the admin can add, edit or remove and service he wants ',
              FeaturesForAdmin7: 'Offering promo code for clients',
              FeaturesForCustomer: 'Features for Customer ',
              FeaturesForCustomer1: 'Shows the waiting time for the customers ',
              FeaturesForCustomer2: 'Features for •	Create account',
              FeaturesForCustomer3: 'Payment Option ',
              FeaturesForCustomer4: 'Feedback forms ',
              FeaturesForCustomer5: 'Ratings and reviews  ',
              FeaturesForCustomer6: 'Choose between different barbers',


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
              p: 'Bolt Restaurant is an application that provides a unique experience for restaurant involved parties starting from Admin/Owner, Waiter, and Ends-user/ Customer.',
              Benefits: 'Benefits',
              benefits1: '1.Ease of use',
              benefits1Description: 'Friendly to deal with system, (simple steps to get the service) facilitating the customer way of ordering in a well-organized and systematic flow. Images of the items with its details are provided to be more realistic and aware of all item’s variety and prices.',
              benefits2: '2. Especially in COVID-19 pandemic as',
              benefits2Description: 'The system makes sure that the health and safety regulations are considered as simply avoiding crowd and hassle of disordering a conflict. ',
              benefits3: '3. Customer satisfaction',
              benefits3Description: '•	Since the business techniques and methods for providing a service are improved, therefore the customer will be more satisfied. (All you need by one click)',
              benefits4: '4. Unique experience ',
              benefits4Description1: 'The customer will consider the service provider preferable, differentiated and a unique one. ',
              benefits4Description2: 'Increase in customer satisfaction. ',
              toSummerize: 'To summarize the system is automated and simpler than the classical way as its saves time and  problem-solves, this aims to help the business on both sides whether for business owner or beneficial customer (Guest).',
              Features: 'Features',
              Features1:'QR code to view the system',
              Features2:'View the best-selling dish/drink',
              Features3:'Friendly use ',
              Features4:'Feedback form',
              Features5:'Payment options ',

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
          textAlign: '',
          iconParagraph: 'iconParagraphEN',
          customText: 'We exist to assist the digital transformation of one-man bands,to SME’s and large blue- chip companies bringing them all into the 21st Century. Our highly skilled experts pave the way for our clients to evolve.',
          Products: {
            productsTitle: 'Products',
            product1: 'Bolt Doctor',
            product2: 'Bolt Salon',
            product3: 'Bolt Restaurant',
            product4: 'Bolt ERP',
          },
          Services: {
            serviceTitle: 'Services',
            service1: 'ERP',
            service2: 'Website Platform',
            service3: 'Mobile Application',
            service4: 'ATM',
            service5: 'CRM',
            service6: 'Data Center Network',
            service7: 'Digital Transformation',
            service8: 'Tailored Solution',
          },
          Contact: {
            contactTitle: "Let's get in touch",
            address: "B-1171 , Road 9, El-Mokattam, Cairo, Egypt",
          }
        },
        Clients: {
          textAlignStyle: '',
          h1: 'We are proud to share our clients',
          p: ' we reach our business goals via in-depth communication and trust with our clients, we build rapport with them to meet their requirements ultimately reaching close partnership together for future repeat business – We’re honored to announce our partnership with'
        }
      }
    }
  
    else if (this.currentLang === 'ar') {
      return {
        dir: 'rtl',
        layout: {
          navStyle: 'arabicNavItem',
          font: 'arabicFont',
          textAlignStyle: 'textAlignRight',
          dropDownStyle: 'dropdown-toggle-arabic',
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
          aboutCompany: 'عن الشركه',
          aboutTeam: 'عن الفريق',

        },
        home: {
          backgroundImage: 'homeBGAR',
          font: 'arabicFont',
          textAlignStyle: 'textAlignRight',
          fontAlMarai: 'arabicFontAlMarai',
          header: {
            h1_1: 'تشعر بالراحه عندما',
            h1_2: 'تقابل التميز',
            paragraph: 'تسريع أداء فريقك من خلال التعيين المهام والتواصل وتتبع التقدم في واحد من أوائل تطبيقات مكان. هل تعلم أننااستضافة الاتحاد الأوروبي لدينا المهور لتقديم خياالعملاء الأوروبيون.',
            classes: {
              header_class: '',
              paragraph_class: 'headerParagraphAR',
              read_more_class: 'readMoreButtonAR',
            },
          },
            SectionOne: {
              h1_1: 'نصنع حلولاً رقمية تساعد',
              h1_2: ' قادة الأعمال على مراقبة المزيد من',
              h1_3: ' أجل الحصول على التحكم الكامل',
              h1_4: 'في كل جانب من جوانب عملك ، مما يضمن تحولك الرقمي إلى العصر الجديد.',
              Userfriendly: 'سهل الاستخدام',
              Responsive: 'متجاوب',
              Fullycustomized: 'مخصصة بالكامل',
              VastProductPortfolio: 'محفظة منتجات ضخمة',
              classes: {
                header_class: 'headerPositionAR',
                img_class: 'imgPositionAR',
              },
            },
            SectionTwo: {
              h1: 'ما نقدمه لكم من حلول',
              h2_1: 'عرض الكل',
              h2_2: 'منتجات',
              h2_3: 'خدمات',
              atm: 'نظام مراقبة ماكينة تنظيف أجهزة الصراف الآلي',
              Tailored: 'حلول مخصصة',
              Digital: 'التحول الرقمي',
              DataCenter: 'مركز البيانات',
              Website: 'منصة الموقع',
              ERP: 'تخطيط موارد المؤسسات',
              CRM:'CRM',
              Mobile: 'تطبيق الهاتف المحمول',
              Boltssalon: 'Bolts salon',
              doctor: 'Bolts doctor',
              Restaurant: 'Bolts Restaurant',
              Bolt_ERP: 'Bolts ERP '
            },
          readMore: 'المزيد',
        },
        about: {
          font: 'arabicFont',
          textAlignStyle: 'textAlignRight',
          company: {
            content: {
              h1: 'أكثر من مجرد موقع على شبكة الإنترنت',
              p:'If you can dream it, we can build it…'
            },
            siteContent: {
              h1: 'مرحبا بكم في موقعنا',
              p: 'بعيدًا ، خلف كلمة الجبال ، بعيدًا عن بلدان فوكاليا وكونسونانتيا ، هناك يعيش المكفوفين',
              h3: 'Vision Statement:',
              p2: ' Simply put, Bolt Solutions is one of the fastest growing software companies in the northern hemisphere.Aiming to becoming the leading performer, recognizing all customer landscapes in this global market place, serving numerous industries and sectors all over the world.',
              p3: 'If you can dream it, we can build it…',
              h3_2: 'Mission Statement:',
              p4: 'We exist to assist the digital transformation of one-man bands, to SME’s and large blue-chip companies bringing them all into the 21st Century! Our highly skilled experts pave the way for our clients to evolve.Our mission is to enable all people and businesses throughout the world to realize their full potential, accelerating organizations digital transition.The transition in turn will enhance business growth of our customers with our creative solutions and design.To have a pro- active work ethic combined with professionality, our outlook is highly profitable and inevitable.',

            },
            board: {
              h1: 'أعضاء مجلس الإدارة لدينا',
              h3: 'مع خبرائنا يمكننا إحداث فرق',
              h2_1: 'محمد الجمال',
              p: 'Deputy CEO & Chief operations officer',
              h2_2: 'ابراهيم راشد',
              p1: 'Chairman',
              h2_3: 'احمد عبد المنعم',
              p2: 'CEO',
            }
          },
          team: {
            content: {
              h1_1: 'الأشياء العظيمة في العمل لا يقوم بها شخص واحد',
              h1_2: "تم إنجازها بواسطة فريق ",
            },
            board: {
              h1: 'نحن فخورون بمشاركة أعضاء فريقنا الرائعين',
              h3:'يمكننا جميعًا القيام بأشياء صغيرة ، بحب كبير ، ويمكننا معًا أن نفعل شيئًا رائعًا - فرقنا'
            },
            h2: 'أحمد حسن',
            p: 'Technology Lead',
            h2_2: ' Mohammed Ragab',
            p2: ' Business Analyst',
            h2_3: 'جيمي هالبين',
            p3: 'Chief commercial & marketing officer ',
            technicalTeam: {
              h2: 'ياسمين غازي',
              p: 'Software Engineer',
              h2_2: 'نادر حسني',
              h2_3: 'معتز ياسين',
              h2_4: 'احمد البندراوى',
              h2_5: 'عمرو مشتهى',
            },
            marketingTeam: {
              h2: 'يوسف داود',
              p: 'Creative Director',
              h2_2: 'محمد طارق',
              p2: 'Visual Artist',
              h2_4: 'محمود الفيشاوي',
              p2_3: ' Video Editor',
              h2_3:'نوران هشام',
              p4:'Graphic Designer'
            },
            SalesTeam: {
              h2: 'مينا ألفونس',
              p: 'Business development executive',
              h2_2: 'شيماء ابراهيم',
              p2: 'Sales team leader',
             
            },
            businessTeam: {
              h2: 'محمد امين',
              p: 'Business Analyst',
              h2_2: 'محمد حسام',
            },
            qaTeam: {
              h2: 'محمد عادل',
              p: 'QA/QC Lead',
            },
            uiTeam: {
              h2: 'محمد مدحت',
              p: ' UI/UX Designer',
            },
              pmTeam: {
                h2: 'يوسف عفيفي',
                p: 'Project Manager',
                h2_2: 'هبة شناورة',
            }

          },
        },
        services: {
          erp: {
            h1: 'تخطيط موارد المؤسسات (ERP )',
            p: 'بعيدًا بعيدًا ، وراء كلمة جبال ، بعيدًا عن البلاد ، بعيدًا بعيدًا ، خلف كلمة جبال ، بعيدًا عن البلاد بعيدًا بعيدًا ، وراء كلمة عن البلاد ، بعيدًا بعيدًا ، خلف كلمة جبال ',
            Benefits: ':الفوائد والميزاتة',
            benefitsWords: 'كفاءة ، تقلل التكاليف وتزيد الربح',
            Features: ':ميزات  ERP',
            accountFeature: 'Account Module features: ',
            accountFeatures2: 'Journal and Payment',
            accountFeatures3: 'Billing',
            accountFeatures4: 'Taxes',
            accountFeatures5: 'Pricing',
            accountFeatures6: 'Retail Operation',
            accountFeatures7: 'Tools',
            accountFeatures8: 'Reports',
            accountFeatures9: 'Shareholder Management',
            textAlign: 'text-right',
          },
          platform: {

          },
          mobile: {

          },
          atm: {
            h1: '',
            p: ''

          },
          DCN: {
            h1: '',
            p: ""
          },
          digital: {
            h1: '',
            p: ''
          },
          tailored: {
            h1: '',
            p: ''
          },

        },
        products: {
          doctor: {
            header:
            {
              h1: "",
              p: ''
            },
            cards:
            {
              card1:
              {
                title: '',
                desc: ''
              },
              card2:
              {
                title: '',
                desc: ''
              }
              ,
              card3:
              {
                title: '',
                desc: ''
              }
              ,
              card4:
              {
                title: '',
                desc: ''
              }
              ,
              card5:
              {
                title: '',
                desc: ''
              }
              ,
              card6:
              {
                title: '',
                desc: ''
              }
              ,
              card7:
              {
                title: '',
                desc: ''
              }

            }

          },
          salon: {
            header:
            {
              h1: "",
              p: ''
            },
            cards:
            {
              card1:
              {
                title: '',
                desc: ''
              },
              card2:
              {
                title: '',
                desc: ''
              }
              ,
              card3:
              {
                title: '',
                desc: ''
              }
              ,
              card4:
              {
                title: '',
                desc: ''
              }
              ,
              card5:
              {
                title: '',
                desc: ''
              }
              ,
              card6:
              {
                title: '',
                desc: ''
              }
              ,
              card7:
              {
                title: '',
                desc: ''
              }
              ,
              card8:
              {
                title: '',
                desc: ''
              }

            }

          },
          restaurant: {
            header:
            {
              h1: "",
              p: ''
            },
            cards:
            {
              card1:
              {
                title: '',
                desc: ''
              },
              card2:
              {
                title: '',
                desc: ''
              }
              ,
              card3:
              {
                title: '',
                desc: ''
              }


            }

          },
          erp: {
            header:
            {
              h1: "",
              p: ''
            },
            cards:
            {
              card1:
              {
                title: '',
                desc: ''
              },
              card2:
              {
                title: '',
                desc: ''
              }
              ,
              card3:
              {
                title: '',
                desc: ''
              }
              ,
              card4:
              {
                title: '',
                desc: ''
              }
              ,
              card5:
              {
                title: '',
                desc: ''
              }
              ,
              card6:
              {
                title: '',
                desc: ''
              }


            }
          }
        },
        contact: {
          contactHeading: "دعونا الحصول على اتصال",
          contactBody: 'نحن منفتحون على أي اقتراح أو لمجرد إجراء دردشة',
          contact_data: '1171 Building , Road 9,El- Mokattam, Cairo, Egypt.',
          ContactHeading2: 'اتصل بنا مع',
          NameValidation: 'من فضلك أدخل إسمك',
          arabicOrEngValidation: 'مسموح فقط بالحروف العربية والإنجليزية',
          MoreThanLetters: 'يجب أن تكون أحرف الاسم أكثر من 3 أحرف',
          LessThanLetters: 'يجب أن تكون أحرف الاسم أقل من 20 حرفًا',
          EmailRequired: 'البريد الالكتروني مطلوب',
          EmailValidation: ' يجب أن يكون تنسيق البريد الإلكتروني صحيحًا (مثال: email@provider.com)',
          phoneNumberRequired: ' يرجى إدخال رقم هاتفك',
          PhoneNumberValidation: 'يرجى إدخال رقم هاتف صالح',
          FullNamePlaceholder: 'الاسم بالكامل',
          EmailPlaceholder: 'البريد الإلكتروني',
          PhoneNumberPlaceholder: 'رقم الهاتف',
          productPlaceHolder: 'اسم المنتج',
          MessagePlaceHolder: 'رسالتك:',
          MessageRequired: 'الرسالة مطلوبة',
          SendButton: 'أرسل رسالة',
          Emirates: 'الإمارات العربية المتحدة',
          Egypt: 'مصر'
        },
        footer: {
          textAlign: 'textAlignRight',
          iconParagraph: 'iconParagraphAR',
          customText: 'تسريع أداء فريقك من خلال التعيينوالتواصل والتواصلالتطبيقات مكان. هل تعلم أننااستضافة الاتحادالأوروبي لدينا المهور لتقديم خياالعملاء الأوروبيون.',
          Products: {
            productsTitle: 'المنتجات',
            product1: 'Bolt Doctor',
            product2: 'Bolt Salon',
            product3: 'Bolt Restaurant',
            product4: 'Bolt ERP',
          },
          Services: {
            serviceTitle: 'الخدمات',
            service1: 'ERP',
            service2: 'Website Platform',
            service3: 'Mobile Application',
            service4: 'ATM',
            service5: 'CRM',
            service6: 'Data Center Network',
            service7: 'Digital Transformation',
            service8: 'Tailored Solution',
          },
          Contact: {
            contactTitle: "دعونا الحصول على اتصال",
            address: "مبنى 1171 ، شارع 9 ، المقطم ، القاهرة ، مصر",
          }
        },
        Clients: {
          textAlignStyle: 'textAlignRight',
          h1: 'نحن فخورون بمشاركة عملائنا',
          p: 'نحن نقدر ثقتهم ، ونطور خدماتنا لتلبية توقعاتهم ، وبناء علاقة معهم لدينا علاقة طويلة الأمد تقوم على الثقة والجودة لتلبية التميز معًا.'
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


