import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../news/news.component';
import { SpecificNewComponent } from '../specific-new/specific-new.component';
import { LayoutComponent } from './layout/layout.component';
import {ContactUsComponent } from '../contact-us/contact-us.component';
import { MobileAppComponent } from '../mobile-app/mobile-app.component';
import { WebPlatformComponent } from '../web-platform/web-platform.component';
import { ERPComponent } from '../erp/erp.component';
import { AtmComponent } from '../atm/atm.component';
import { CdnComponent } from '../cdn/cdn.component';
import { TailoredSolutionsComponent } from '../tailored-solutions/tailored-solutions.component';
import { DigitalTransformationComponent } from '../digital-transformation/digital-transformation.component';
import { BOLTSALONComponent } from '../boltsalon/boltsalon.component';
import { BoltErpComponent } from '../bolt-erp/bolt-erp.component';
import { BOLTDOCTORComponent } from '../boltdoctor/boltdoctor.component';
import { BOLTRESTAURANTComponent } from '../boltrestaurant/boltrestaurant.component';
import { CRMComponent } from '../crm/crm.component';


const routes: Routes = [
  {
    //Empty path will be automatically redirected to from app-routing module.
    //Children modules/components are declared here.
    path: '', component: LayoutComponent, children: [

      { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
      { path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule), data: { animationState: 'Two' } }, // AboutUs module lazy loaded
      { path: 'contact-us', component: ContactUsComponent, data: { animationState: 'Three' } },
      { path: 'news', component: NewsComponent, data: { animationState: 'Four' } },
      { path: 'specificNew', component: SpecificNewComponent, data: { animationState: 'Five' } },
      { path: 'MobileApp', component: MobileAppComponent, data: { animationState: 'Six' } },
      { path: 'web', component: WebPlatformComponent, data: { animationState: 'Seven' } },
      { path: 'ERP', component: ERPComponent, data: { animationState: 'Eight' } },
      { path: 'ATM', component: AtmComponent, data: { animationState: 'Nine' } },
      { path: 'DCN', component: CdnComponent, data: { animationState: 'Ten' } },
      { path: 'TailoredSolution', component: TailoredSolutionsComponent, data: { animationState: 'Eleven' } },
      { path: 'DigitalTransformation', component: DigitalTransformationComponent, data: { animationState: 'Twelve' } },
      { path: 'BoltSalon', component: BOLTSALONComponent, data: { animationState: 'Thirteen' } },
      { path: 'BoltERP', component: BoltErpComponent, data: { animationState: 'Fourteen' }},
      { path: 'BoltDoctor', component: BOLTDOCTORComponent, data: { animationState: 'Fifteen' } },
      { path: 'BoltRestaurant', component: BOLTRESTAURANTComponent, data: { animationState: 'Sixteen' } },
      { path: 'CRM', component: CRMComponent, data: { animationState: 'seventeen' } },



      { path: '', redirectTo: 'home', pathMatch: 'full' } //default redirect to desired child component on routing module call
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
