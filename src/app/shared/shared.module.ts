import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MenuComponent, HeaderComponent],
})
export class SharedModule {}
