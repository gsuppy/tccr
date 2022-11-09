import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview/overview.component";

import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [OverviewComponent],
})
export class OverviewModule {}
