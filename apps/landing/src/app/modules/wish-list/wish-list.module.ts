import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '@nintendo/shared-components';

const wishListRoutes: Routes = [
  { path: '',   component: WishListComponent},
];

@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(wishListRoutes),
    SharedComponentsModule
  ]
})
export class WishListModule { }
