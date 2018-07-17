import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackageComponent } from './package/package.component';
import { ReportComponent } from './report/report.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'package', component: PackageComponent },
    { path: 'report', component: ReportComponent },
    { path: 'menu', component: MenuComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);