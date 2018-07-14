import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { RouterModule,Routes} from '@angular/router';

const Routes: Routes =[
  {
    path : 'dasboard',
    component: DashboardComponent
  },
  {
    path : '**',
    component: HomeComponent
  }
];

export const AppRouting = RouterModule.forRoot(Routes);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
