import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, TableModule]
})
export class SharedModule {}
