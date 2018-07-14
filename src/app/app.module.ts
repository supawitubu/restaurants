import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { routing } from './app.routing';
import { PackageComponent } from './package/package.component';


const appRoutes: Routes = [
  { path: 'dasboard', component: DashboardComponent },
  { path: 'package', component: PackageComponent },
  { path: '**', component: HomeComponent }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    routing
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
