import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { AppSharedModule } from '../shared/shared.module';

import { InnerDashboardModule } from './inner-dashboard/inner-dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { LocationsModule } from './locations/locations.module';
import { UsersModule } from './users/users.module';
import { VendorsModule } from './vendors/vendors.module';
import { ProductsModule } from './products/products.module';
import { InventoryModule } from "./inventory/inventory.module";
import { TranseferModule } from "./transfer/transfer.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

// for lazy loading
//import { routing } from './index';
import { OrdersPreviewModule } from './shopping-list/orders-preview/orders-preview.module';
import { PurchaseOrderModule } from './shopping-list/orders-preview/purchase-order/purchase-order.module';
import { ReportsModule } from './reports/reports.module';
import { AppliancesModule } from './appliances/appliances.module';
import { AssetsModule } from './assets/assets.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    //routing,
    AppliancesModule,
    AppSharedModule,
    AssetsModule,
    OrdersPreviewModule,
    PurchaseOrderModule,
    InnerDashboardModule,
    OrdersModule,
    LocationsModule,
    UsersModule,
    VendorsModule,
    ProductsModule,
    InventoryModule,
    TranseferModule,
    ReportsModule,
    ShoppingListModule,
  ],
  providers: []
})
export class DashboardModule {
}