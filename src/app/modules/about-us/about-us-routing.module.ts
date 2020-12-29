import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './aboutModule/about.component';


const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [

      { path: 'about-company', component: AboutUsComponent },
      { path: 'about-team', component: AboutTeamComponent },

      { path: '', redirectTo: 'about-company', pathMatch: 'full' } //default redirect to desired child component on routing module call
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
