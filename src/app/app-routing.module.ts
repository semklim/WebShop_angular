import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth.guard';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './mainPage/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin', component: AdminMainComponent, canActivate: [AdminGuard] },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
