import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/** Component view imports. */
import { FootprintComponent } from "./footprint/footprint/footprint.component";
import { OverviewComponent } from "./overview/overview/overview.component";
import { MachinesComponent } from "./machines/machines/machines.component";
import { OptimizerComponent } from "./optimizer/optimizer/optimizer.component";
import { PlansComponent } from "./plans/plans/plans.component";
import { ReportingComponent } from "./reporting/reporting/reporting.component";
import { ImportComponent } from "./import/import/import.component";
import { ConfigureComponent } from "./configure/configure/configure.component";

const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "footprint", component: FootprintComponent },
  { path: "overview", component: OverviewComponent },
  { path: "machines", component: MachinesComponent },
  { path: "optimizer", component: OptimizerComponent },
  { path: "plans", component: PlansComponent },
  { path: "reporting", component: ReportingComponent },
  { path: "import", component: ImportComponent },
  { path: "configure", component: ConfigureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
