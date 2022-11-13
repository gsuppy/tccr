import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImportComponent } from "./import/import.component";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [ImportComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ImportComponent],
})
export class ImportModule {}
