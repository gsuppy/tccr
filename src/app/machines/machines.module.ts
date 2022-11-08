import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines/machines.component';



@NgModule({
  declarations: [
    MachinesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachinesComponent
  ]
})
export class MachinesModule { }
