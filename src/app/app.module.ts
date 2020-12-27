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


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    NewsComponent,
    SpecificNewComponent,
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
