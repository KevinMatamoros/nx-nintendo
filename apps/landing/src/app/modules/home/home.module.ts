import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedComponentsModule } from '@nintendo/shared-components';

const homeRoutes: Routes = [
  { path: '',   component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedComponentsModule
  ],
})
export class HomeModule { }
