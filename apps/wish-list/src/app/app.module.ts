import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { SharedComponentsModule } from '@nintendo/shared-components';
import { SharedStoreModule } from '@nintendo/shared-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    SharedComponentsModule,
    RouterModule,
    SharedStoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
