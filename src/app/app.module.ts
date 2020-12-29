import { HttpClientModule } from '@angular/common/http'; // Http client module import
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormGroup and Validation module import
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module'; // Default Angular Routing module
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { NewsComponent } from './modules/news/news.component';
import { SpecificNewComponent } from './modules/specific-new/specific-new.component';
import { MobileAppComponent } from './modules/mobile-app/mobile-app.component';
import { WebPlatformComponent } from './modules/web-platform/web-platform.component';
import { ERPComponent } from './modules/erp/erp.component';
import { CdnComponent } from './modules/cdn/cdn.component';
import { BoltErpComponent } from './modules/bolt-erp/bolt-erp.component';
import { TailoredSolutionsComponent } from './modules/tailored-solutions/tailored-solutions.component';
import { DigitalTransformationComponent } from './modules/digital-transformation/digital-transformation.component';
import { BOLTRESTAURANTComponent } from './modules/boltrestaurant/boltrestaurant.component';
import { BOLTSALONComponent } from './modules/boltsalon/boltsalon.component';
import { BOLTDOCTORComponent } from './modules/boltdoctor/boltdoctor.component';
import { AtmComponent } from './modules/atm/atm.component';


@NgModule({
  declarations: [
    AppComponent,
    CdnComponent,
    BoltErpComponent,
    TailoredSolutionsComponent,
    DigitalTransformationComponent,
    BOLTRESTAURANTComponent,
    BOLTSALONComponent,
    BOLTDOCTORComponent,
    AtmComponent,
  
  ],
  imports: [
    FormsModule,
    RouterModule,
    LayoutModule, // Layout Module imported
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    // Slick Carousel import
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
