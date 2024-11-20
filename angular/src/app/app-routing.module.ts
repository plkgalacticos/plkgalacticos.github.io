import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MembersComponent } from './view/members/members.component';
import { AboutComponent } from './view/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
