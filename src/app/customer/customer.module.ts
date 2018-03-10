import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "@app/customer/customer.routing";
import { SharedModule } from "@app/shared";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [CommonModule, TranslateModule, CustomerRoutingModule, SharedModule],
  declarations: [CustomerComponent]
})
export class CustomerModule {}
