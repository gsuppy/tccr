import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { NotificationComponent } from "./notification/notification.component";
import { DateFilterComponent } from './date-filter/date-filter.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, NotificationComponent, DateFilterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [MenuComponent, HeaderComponent, NotificationComponent, DateFilterComponent],
})
export class SharedModule {}
