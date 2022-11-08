import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptimizerComponent } from "./optimizer/optimizer.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [OptimizerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [OptimizerComponent],
})
export class OptimizerModule {}
