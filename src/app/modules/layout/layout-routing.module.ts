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


      { path: '', redirectTo: 'home', pathMatch: 'full' } //default redirect to desired child component on routing module call
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
