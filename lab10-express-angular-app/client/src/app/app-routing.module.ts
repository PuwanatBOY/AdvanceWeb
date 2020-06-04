import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductsComponent } from './component/showproducts/showproducts.component';
import { AddproductComponent } from './component/addproduct/addproduct.component'

const routes: Routes = [
  {path: '', redirectTo: '/showproducts', pathMatch: 'full'} ,
  {path: 'showproducts', component: ShowproductsComponent},
  {path: 'addproduct', component: AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
