import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

/** Modules for different views. */
import { FootprintModule } from "./footprint/footprint.module";
import { OverviewModule } from "./overview/overview.module";
import { MachinesModule } from "./machines/machines.module";
import { OptimizerModule } from "./optimizer/optimizer.module";
import { ConfigureModule } from "./configure/configure.module";
import { ReportingModule } from "./reporting/reporting.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FootprintModule,
    OverviewModule,
    MachinesModule,
    OptimizerModule,
    ConfigureModule,
    ReportingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
