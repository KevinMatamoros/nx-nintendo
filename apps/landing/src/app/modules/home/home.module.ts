import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from "@angular/cdk/scrolling";

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
    SharedComponentsModule,
    ScrollingModule
  ],
})
export class HomeModule { }
