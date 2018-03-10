import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { extract } from "@app/core";
import { CustomerComponent } from "@app/customer/customer.component";

const routes: Routes = [{ path: "", component: CustomerComponent, data: { title: extract("customer") } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomerRoutingModule {}
