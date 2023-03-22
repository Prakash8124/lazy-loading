import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  { 
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preloadingStrategy : PreloadAllModules //if you enable it's render all the module at initial loading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
