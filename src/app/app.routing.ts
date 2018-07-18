import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    { path: 'bill', component: BillComponent },
    { path: 'table', component: TableComponent },
    { path: 'list-menu', component: ListMenuComponent },
    { path: 'pos', component: PosComponent },
    { path: 'stock', component: StockComponent },
    { path: 'supplier', component: SupplierComponent },
    { path: 'product', component: ProductComponent },
    { path: 'order', component: OrderComponent },
    { path: 'import-product', component: ImportProductComponent },
    { path: 'export-product', component: ExportProductComponent },
    { path: 'salary', component: SalaryComponent },
    { path: 'emproyee', component: EmproyeeComponent },
    { path: 'check-time', component: CheckTimeComponent },
    { path: 'calculate-salary', component: CalculateSalaryComponent },
    { path: 'del-add-money', component: DelAddMoneyComponent },
    { path: 'set-time', component: SetTimeComponent },
    { path: 'backend', component: BackendComponent },
    { path: 'user', component: UserComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'backup', component: BackupComponent }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);