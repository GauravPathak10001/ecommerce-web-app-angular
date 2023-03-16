import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerUpdateComponent } from './components/seller-update/seller-update.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { SellerAuthGuard } from './seller-auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[SellerAuthGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[SellerAuthGuard]
  },
  {
path:'seller-update-product/:id',
component:SellerUpdateComponent,
canActivate:[SellerAuthGuard]
  },
 {
  path:'search/:query',
  component: SearchComponent
 },
 {
  path:'details/:productId',
  component:ProductDetailsComponent
 },
 {
path:'user-auth',
component:UserAuthComponent
 },
  {
    path:'**',
    component:NopageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
