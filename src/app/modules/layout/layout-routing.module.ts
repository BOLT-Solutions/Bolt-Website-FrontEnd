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


const routes: Routes = [
  {
    //Empty path will be automatically redirected to from app-routing module.
    //Children modules/components are declared here.
    path: '', component: LayoutComponent, children: [

      { path: 'home', component: HomeComponent },
      { path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule) }, // AboutUs module lazy loaded
      { path: 'contact-us', component:ContactUsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'specificNew', component: SpecificNewComponent },
      { path: 'mobApp', component: MobileAppComponent },
      { path: 'web', component: WebPlatformComponent },
      { path: 'erp', component: ERPComponent },
      { path: 'atm', component: AtmComponent },
      { path: 'cdn', component: CdnComponent },
      { path: 'tailoredSolution', component: TailoredSolutionsComponent },
      { path: 'digital', component: DigitalTransformationComponent },
      { path: 'salon', component: BOLTSALONComponent },
      { path: 'bolterp', component: BoltErpComponent },
      { path: 'doctor', component: BOLTDOCTORComponent },
      { path: 'restaurant', component: BOLTRESTAURANTComponent },



      { path: '', redirectTo: 'home', pathMatch: 'full' } //default redirect to desired child component on routing module call
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
