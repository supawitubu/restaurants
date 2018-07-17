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
import { ReportComponent } from './report/report.component';
import { MenuComponent } from './menu/menu.component';
import { SaleComponent } from './sale/sale.component';
import { BillComponent } from './sale/bill/bill.component';
import { TableComponent } from './sale/table/table.component';
import { ListMenuComponent } from './sale/list-menu/list-menu.component';
import { PosComponent } from './sale/pos/pos.component';
import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './stock/supplier/supplier.component';
import { ProductComponent } from './stock/product/product.component';
import { OrderComponent } from './stock/order/order.component';
import { ImportProductComponent } from './stock/import-product/import-product.component';
import { ExportProductComponent } from './stock/export-product/export-product.component';
import { SalaryComponent } from './salary/salary.component';
import { EmproyeeComponent } from './salary/emproyee/emproyee.component';
import { CheckTimeComponent } from './salary/check-time/check-time.component';
import { CalculateSalaryComponent } from './salary/calculate-salary/calculate-salary.component';
import { DelAddMoneyComponent } from './salary/del-add-money/del-add-money.component';
import { SetTimeComponent } from './salary/set-time/set-time.component';
import { BackendComponent } from './backend/backend.component';
import { UserComponent } from './backend/user/user.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { BackupComponent } from './backend/backup/backup.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'package', component: PackageComponent },
    { path: 'report', component: ReportComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'sale/bill', component: BillComponent },
    { path: 'sale/table', component: TableComponent },
    { path: 'sale/list-menu', component: ListMenuComponent },
    { path: 'sale/pos', component: PosComponent },
    { path: 'stock', component: StockComponent },
    { path: 'stock/supplier', component: SupplierComponent },
    { path: 'stock/product', component: ProductComponent },
    { path: 'stock/order', component: OrderComponent },
    { path: 'stock/import-product', component: ImportProductComponent },
    { path: 'stock/export-product', component: ExportProductComponent },
    { path: 'salary', component: SalaryComponent },
    { path: 'salary/emproyee', component: EmproyeeComponent },
    { path: 'salary/check-time', component: CheckTimeComponent },
    { path: 'salary/calculate-salary', component: CalculateSalaryComponent },
    { path: 'salary/del-add-money', component: DelAddMoneyComponent },
    { path: 'salary/set-time', component: SetTimeComponent },
    { path: 'backend', component: BackendComponent },
    { path: 'backend/user', component: UserComponent },
    { path: 'backend/profile', component: ProfileComponent },
    { path: 'backend/backup', component: BackupComponent }
  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PackageComponent,
    ReportComponent,
    MenuComponent,
    SaleComponent,
    BillComponent,
    TableComponent,
    ListMenuComponent,
    PosComponent,
    StockComponent,
    SupplierComponent,
    ProductComponent,
    OrderComponent,
    ImportProductComponent,
    ExportProductComponent,
    SalaryComponent,
    EmproyeeComponent,
    CheckTimeComponent,
    CalculateSalaryComponent,
    DelAddMoneyComponent,
    SetTimeComponent,
    BackendComponent,
    UserComponent,
    ProfileComponent,
    BackupComponent
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
