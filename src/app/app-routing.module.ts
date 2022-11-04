import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FootprintComponent } from "./footprint/footprint/footprint.component";

import { OverviewComponent } from "./overview/overview/overview.component";

const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "footprint", component: FootprintComponent },
  { path: "overview", component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
