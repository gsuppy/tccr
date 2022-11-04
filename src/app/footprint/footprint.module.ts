import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FootprintComponent } from "./footprint/footprint.component";

import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [FootprintComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FootprintComponent],
})
export class FootprintModule {}
