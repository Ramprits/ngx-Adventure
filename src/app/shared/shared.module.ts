import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { LoaderComponent } from "./loader/loader.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, TableModule, ReactiveFormsModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, TableModule, ReactiveFormsModule]
})
export class SharedModule {}
