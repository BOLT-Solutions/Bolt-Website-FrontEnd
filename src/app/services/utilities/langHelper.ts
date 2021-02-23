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
            paragraph: 'Bolt Solutions is an established Software house in Egypt with a commitment to align employee development with the overall company culture and operating systems.',
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
            h2_3: 'Products',
            atm: 'ATM cleaning machinesystem',
            atm2: 'ATM montoring system',
            Tailored: 'Tailored solutions',
            Digital: 'Digital transformation',
            DataCenter: 'Data Center',
            Website: 'Website Platform',
            ERP: 'ERP',
            CRM:'CRM',
            Mobile: 'Mobile Application',
            Boltssalon: 'Bolt Salon',
            doctor: 'Bolt Doctors',
            Restaurant: 'Bolt Restaurant',
            Bolt_ERP: 'Bolt ERP '
          },
          readMore: 'Read More',
        },
        about: {
          font: '',
          textAlignStyle: '',
          company: {
            content: {
              h1: 'More than just a website',
              p:'If you can dream it, we can build it…'
            },
            siteContent: {
              h1: 'Welcome to our business.',
              p: ' We can be your consultant, not only your service provider.',
              p_2: "Bolt Solutions is an established Software house in Egypt with resources / offices in Dubai and Birmingham, UK.",
              p_3: " With a commitment to align employee development with the overall company culture and operating systems.We will help empower people and businesses alike on a scientific basis,through the provision of optimally tailored solutions from our leading experts around the world.",
              h3: 'Vision Statement',
              p2: ' Simply put, Bolt Solutions is one of the fastest growing software companies in the northern hemisphere.',
              p2_2: 'Aiming to become the leading performer, recognizing all customer landscapes in this global market place, serving numerous industries and sectors all over the world.',
              p3: 'If you can dream it, we can build it…',
              h3_2: 'Mission Statement',
              p4: 'We exist to assist the digital transformation of one-man bands, to SME’s and large blue-chip companies bringing them all into the 21st Century! Our highly skilled experts pave the way for our clients to evolve.',
              p4_2: "Our mission is to enable all people and businesses throughout the world to realize their full potential, accelerating organizations digital transition.The transition in turn will enhance business growth of our customers with our creative solutions and design.To have a pro- active work ethic combined with professionality, our outlook is highly profitable and inevitable.",

            },
            board: {
              h1: ' Our Board Members',
              h3: 'With our experts we can make a difference.',
              h2_1: 'Muhammed Al Jammal',
              p: 'Deputy CEO & Chief Operations Officer',
              h2_2: 'Ibrahim Rashed',
              p1: 'Chairman',
              h2_3: 'Ahmed Abdel Moneim',
              p2: 'Chief Executive Officer',
            }
          },
          team: {
            content: {
              h1_1: 'Great things in business are never done by one person.',
              h1_2: "They're done by a team ",
            },
            board: {
              h1: 'We are proud to share our great team members.',
              h3:'We can all do small things, with great love, and together we can do something wonderful'
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
            p: "Enterprise Resource Planning (ERP), it’s a software that merges different modules into one complete system that streamline process’s and information across the entire organization. ",
            p2: "Ultimately our ERP’s bring together all the core components of your business into one unified, digital experience!",
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
            cards: {
              card1:
              {
                title: "Finance module",
                desc: "Keeps track of all financial transactions like expenditures, balance sheet, general ledgers, budgeting, bank statements, payment receipts, tax management, etc.",
              },
              card2:
              {
                title: "Inventory module",
                desc: "Keep track of your stock, monitoring product and resource supplies and maximizing profits",
              },
              card3:
              {
                title: "CRM module",
                desc: "Support the sale’s performance through better customer service & establishing a healthy relationship with customers",
              },
              card4:
              {
                title: "Purchasing module",
                desc: "Purchase modules take care of all the processes that are part of the procurement of items or raw materials that are required for the organization",
              },
              card5:
              {
                title: "HR & payroll module",
                desc: "Manage employee information, track employee records like performance reviews, attendance tracking, training and development, payroll, etc.",
              },
              card6:
              {
                title: "Project management module",
                desc: "Manages resources necessary to complete projects on track to deliver with transparency",
              },
              card7:
              {
                title: "Asset module",
                desc: "This is a technology-empowered method for organizing assets, improving efficiency, and maximizing your investments.",
              },
              card8:
              {
                title: "Manufacturing module",
                desc: "Helps manage the scheduling of staff as well as machine operation and maintenance to maximize production.",
              },
            }
          },
          platform: {
            header:
            {
              benefits: 'Benefits & Features',
              mainParagraph: "Being a trusted name for website development services, we have received a great response from businesses including many referrals.",
              mainParagraph2: "We work with you to ensure that we understand exactly what your unique requirements are.",
              mainParagraph3: "To ensure the finalized deliverable is sent on time, we follow a 6-phase approach. The process is completely aligned with the design specifications to achieve your goals.",
              h1: "Website Platform",
              p: 'A website (also written as web site) is a collection of web pages and related content that is identified, domain name and published on one web server. This cements your business in cyber space leaving your mark in the online business market to enable you to work in the 21st century.',
              p2: 'E-Commerce websites are online portals that facilitate online transactions of your goods and your services',
            },
            cards:
            {
              card1:
              {
                title: 'User friendly',
              },
              card2:
              {
                title: 'Security features',
              }
              ,
              card3:
              {
                title: 'Payment gateways',
              },
              card4:
              {
                title: 'Progressive web applications',
              },
              card5:
              {
                title: 'Animated website',
              },
              card6:
              {
                title: 'Responsive UI design',
              },
              card7:
              {
                title: 'Online presence',
              },
              card8:
              {
                title: 'Expanding your business',
              },
              card9:
              {
                title: 'Business branding',
              },
            }
          },
          mobile: {
            header:
            {
              h1: "Mobile Application",
              mainParagraph: "Your dream deserves more than a place in your imagination.",
              mainParagraph2: " Our mobile app developers can build the application to your requirements, within your budget and per your timeline.",
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
                title: 'Building your target audience ',
              },
              card2:
              {
                title: 'Branding and Design ',
              }
              ,
              card3:
              {
                title: 'Business competitive advantage ',
              }
              ,
              card4:
              {
                title: 'Stay closer to your customer ',
              },
              card5:
              {
                title: 'Fitting to all business volumes ',
              }
              
               

            }
          },
          atm: {
            h1: ' ATM Cleaning Service',
            p2: 'The ATM cleaning service application enables banks to monitor and track the performance of the service providers that clean the ATM machines. ',
            p3: "Giving the banks the oversight knowledge of the current status, where and when!",
            Benefits: 'Benefits:',
            cards: {
              card1: {
                title: "Real time tracking of the delivered services",
              },
              card2: {
                title: "Dashboard to portray the time scale of cleaning the ATM’s",
              },
              card3: {
                title: "Routine ATM cleaning safeguards from any errors or malfunctions",
              },
              card4: {
                title: "Increase security as it detects skimming devices",
              },
            }
          },
          atm2: {
            h1: ' ATM Monitoring Service',
            p2: 'It gives continuous examination of ATM wellbeing status, money and consumable levels, which rely on the business rules characterized, creates alerts and gathers data for proactive administration of the ATMs.',
            p3: "This system gives you the power to oversee and have the birds eye view of the ATM chain.",
            Benefits: 'Benefits:',
            cards: {
              card1: {
                title: "Cash management",
                desc: "Cash forecasting",
                desc2: "Reconciliation ",
              },
              card2: {
                title: "Incident and SLA Management",
                desc: "Ticket dashboards",
                desc2: "Service level monitoring of ticket resolution",
                desc3: "Alerts, reminders, and escalation",
              },
              card3: {
                title: "Journal records management",
                desc: "EJ pulling and archival",
                desc2: "Transaction image pulling",
                desc3: "Surveillance videos ",
                desc4: "Dispute resolution and compliance",

              },
              card4: {
                title: "Mobile apps for branch and vendors",
                desc: "Notification and escalation ",
                desc2: "Anytime, anywhere access",
                desc3: "Vendor incident management on mobile",
              },
              card5: {
                title: "Availability Monitoring",
                desc: "Uptime monitoring and reports",
                desc2: "Cash level monitoring",
                desc3: "Trend dashboards",
              },
              card6: {
                title: "Business Analytics",
                desc: "Terminal performance analytics",
                desc2: "Transaction analytics",
                desc3: "Vendor performance analytics",
               
              },
              card7: {
                title: "Content and patch management",
                desc: "Centralized software and patch distribution",
                desc2: "Asset and inventory maintenance ",
                desc3: "Content distribution",
              }
            }
          },
          DCN: {
            h1: 'Data Center Services',
            p: "Our Technology experts will build you a data center that centralizes your organization’s shared IT operations and equipment for the purposes of storing, processing, and disseminating data and applications. Because they house an organization's most critical and proprietary assets, data centers are vital to the continuity of daily operations. They are the heart of the new world.",
            p2: "We support the servers, switches, hubs, and infrastructure of the network preference. Also providing the database backup & recovery of the company's valuable data.",
            cards: {
              card1: {
                title: "Reduce risk of losing data",
                desc: "The data is backed-up on daily basis in one place",
                desc2: "Data storage, management and recovery",
              },
              card2: {
                title: "Scalability",
                desc: "As it’s upgradable it can easily grow/evolve with your business",
              },
              card3: {
                title: "Improve efficiency",
                desc: "By decreasing the error of data entry",
              },
              card4: {
                title: "Performance at scale",
                desc: "Data center helps in fulfilling the capacity of different users at the same time without decreasing the performance",
              },
            }
          },
          digital: {
            h1: 'Digital Transformation',
            p: "Using our latest cutting-edge technologies, we will provide you with an innovative tool that will dramatically improve your business processes based on technological advanced options.",
            p2: "Our experience will ensure your digital transformation is swift and efficient, more importantly- to your requirements",
            cards: {
              card1:
              {
                title: "Helping employees to be more effective",
                desc: "Our product facilitates the employee processes to maximize their output",
              },
              card2:
              {
                title: "Increased profits",
                desc: "Companies that undergo digital transformation improve their efficiency and profitability",
              },
              card3:
              {
                title: "Enhanced data collection",
                desc: "Optimizing a lot of data for analysis that will drive the business forward",
              },
              card4:
              {
                title: "Increase your business process efficiency",
                desc: "Optimizing the business functionality to reach the most efficient output",
              },
              card5:
              {
                title: "Innovation",
                desc: "Provide a space for creation towards supporting the business goals ",
              },
            }
          },
          tailored: {
            h1: 'Tailored Solutions',
            p: ' Based on your business need we can create suitable solutions that integrate your business.',
            cards:
            {
              card1:
              {
                title: 'Unique creation starting point',
              },
              card2:
              {
                title: 'Market differentiated application',
              },
              card3:
              {
                title: 'Scalability',
              },
              card4:
              {
                title: 'Integration to reach target',
              },
              card5:
              {
                title: 'Customized as per client needs ',
              }
              ,
              card6:
              {
                title: 'Realted directly to your business',
              }
              ,
              card7:
              {
                title: 'Personalized technical support',
              },
              card8:
              {
                title: 'Costs are directly related to the features',
              },



            },
          },
          crm: {
            h1: ' Customer Relationshio Management',
            p2: "CRM (Customer Relationship Management) is a way to manage your leads and your existing customers in the most efficient way possible. This technology manages all your company’s relationships and interactions with customers and potential customers, this tool helps with contact management, sales management, productivity and much more! ",
            cards: {
              card1: {
                title: "Sales module",
                desc: "This a mix of operational and analytical capabilities that connect back-office processes, like sales planning with front-office like sales representative ",
              },
              card2: {
                title: "Marketing module",
                desc: "The module helps in gather all your customer information and evaluate marketing campaigns efficiently",
              },
              card3: {
                title: "Customer service module",
                desc: "This enables you to accept an incoming customer request on a Case (or incident), manage these in queues or views, and track all communications with your customer",
              },
              card4: {
                title: "Reporting & analysis",
                desc: "Provides data that helps in decision making and can come in many forms",
              },
            }
           
          },
        },
        products: {
          doctor: {
            header:
            {
              h1: "BOLT DOCTORS",
              p: 'It is a Web based application that allows patients to book appointments online through any web-connected device, such as a computer, laptop, smartphone or tablet. It lets the patient choose from a portfolio of doctors, specialty, experience, and how long to wait for an appointment including the cost involved.',
              p2:' In a nutshell this is an advanced medical/ doctor queuing system of the future',
              Benefits: 'Benefits',
              Benefits1: 'Saves your staff time.',
              Benefits2: 'Gives your patients more options ',
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
                title: 'Gives your patients more options',
                desc: 'By allowing the customer to choose from different doctors within different specialized medical fields'
              }
              ,
              card3:
              {
                title: 'Saves Resources',
                desc: 'The expenses accepted for manual appointments and bookings are suspended.'
              }
              ,
              card4:
              {
                title: 'Automated reminders',
                desc: 'Remind your patients about their appointments.'
              }
              ,
              card5:
              {
                title: 'Flexible to use',
                desc: 'Patients would be able to book their appointments at anytime anywhere.'
              }
              ,
              card6:
              {
                title: 'Online booking',
                desc: 'Making online appointments saves patients time instead of going to the clinic, everyone wins..'
              }
              ,
              card7:
              {
                title: 'Efficient information management',
                desc: 'Having your patient’s information online lets you manage them efficiently and more accurately.'
              },
              card8:
              {
                title: 'More organized',
                desc: 'By decreasing any “overcrowding” surgeries, peak times are a thing of the past.'
              }

            }

          },
          salon: {
            header:
            {
              h1: "BOLT SALON",
              p: 'Digitizing your salon will help your customers to have a better user experience than any traditional salon. Imagine being able to choose who cuts your hair before you arrive and being able to choose the service type to see the cost.',
              p2: 'The monitoring tools give the owner the ability to see what is happening in real time, increasing efficiency and profit!',
              p3: "Bolt salon is rolling out fast and already making its mark on the high street . To bring your salon into the future call us now to get a free consultation and please don't hesitate to ask about our case studies of salons that already use this fantastic product with ease and satisfaction due to its cost savings and efficiency.",
              p4: 'Cut out the time and straighten your salon with BOLT ',


            },
            cards:
            {
              card1:
              {
                title: 'Monitor your invoices',
                desc: 'Helps the manager monitor and view invoices in any time '
              },
              card2:
              {
                title: 'Build customer database',
                desc: 'you get to have complete reference or log for each customer'
              }
              ,
              card3:
              {
                title: 'Staff development',
                desc: ' By using our app, it is simple to figure out the strength and weakness points of your staff.'
              }
              ,
              card4:
              {
                title: 'Feedback management',
                desc: ' Get to know what your customers think of you'
              }
              ,
              card5:
              {
                title: 'Marketing promotions for your customers',
                desc: 'Promo codes for your tailored customer base'
              }
              ,
              card6:
              {
                title: 'Monitor staff ',
                desc: 'See who’s working on what service, managing your staff more efficiently from a bird’s eye point of view.'
              },

            }

          },
          restaurant: {
            header:
            {
              h1: "BOLT RESTAURANT",
              p: 'Bolt restaurant is a solution that provides a unique in-dining experience for restaurants by digitalizing the ordering process. From the comfort of your personal device, you are able to order food and drinks remotely and for the restaurateur you get the birds eye view with all the trimmings!',
              p2: "Providing you with all the monitoring tools at your fingertips to see which waiter is working, idle or taking which order. We have found Restaurateur's specifically like the ability to see how much money they have made automatically and being able to view customer feedback on the food and service.",
              p3: "Bolt restaurant gives you full transparency and automation leaving you and the customer with more options and time to do the things you love. Bolt restaurant is the new-age model of the ordering process and we are very excited to share this with you.Bringing your restaurant into the 21st century…",
              Benefits: 'Benefits',
              benefits1: 'Data analysis.',
              benefits1Description: 'Provides you with useful reports like periodical statistics about all the customer visits, total cost of service and customer waiting time and more!',
              benefits2: 'Build customer database',
              benefits2Description: 'You get to have a complete reference for each customer building a profile for each one so wen they come back they have a more personalized experience.',
              benefits3: 'Staff development',
              benefits3Description: '',
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
                title: 'Data analysis',
                desc: 'Provides you with useful reports like periodical statistics about all the customer visits, total cost of service and customer waiting time and more!'
              },
              card2:
              {
                title: 'Build customer database',
                desc: 'You get to have a complete reference for each customer building a profile for each one so wen they come back they have a more personalized experience.'
              }
              ,
              card3:
              {
                title: 'Staff development',
                desc: 'By using our app, it is easy to figure out your strength and weakness points of your staff'
              },
              card4:
              {
                title: 'Effective feedback',
                desc: 'Get to know what your customers think of your business'
              },
              card5:
              {
                title: 'Marketing promotions for your customers',
                desc: 'You can reward your customers by providing them with a promo code that will entice them to come back to you for another meal'
              },
        

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
          },
          Services: {
            serviceTitle: 'Services',
            service1: 'Website Platform',
            service2: 'CRM',
            service3: 'Tailored Solutions',
            service4: 'Mobile Application',
            service5: 'Digital Transformation',
            service6: 'Data Center Network',
            service7: 'ATM Cleaning Service',
            service8: 'ATM Monitoring Service',
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
              h3: 'Vision Statement',
              p2: ' Simply put, Bolt Solutions is one of the fastest growing software companies in the northern hemisphere.',
              p2_2: 'Aiming to become the leading performer, recognizing all customer landscapes in this global market place, serving numerous industries and sectors all over the world.',
              p3: 'If you can dream it, we can build it…',
              h3_2: 'Mission Statement',
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


