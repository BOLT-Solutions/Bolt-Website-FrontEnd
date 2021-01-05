import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutComponent } from './aboutModule/about.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutTeamComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
