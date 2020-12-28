import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NewsComponent } from '../news/news.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { SpecificNewComponent } from '../specific-new/specific-new.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    SpecificNewComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
