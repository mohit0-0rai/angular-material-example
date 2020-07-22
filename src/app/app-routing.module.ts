import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './user/login/auth.guard';


const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard',
    component: MyDashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
