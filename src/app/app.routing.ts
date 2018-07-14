import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackageComponent } from './package/package.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'packege', component: PackageComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);