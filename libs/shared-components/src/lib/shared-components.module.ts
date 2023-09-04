import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { presentationalComponents } from './presentational';

@NgModule({
  imports: [CommonModule],
  declarations: [...presentationalComponents],
  exports: [...presentationalComponents],
})
export class SharedComponentsModule {}
