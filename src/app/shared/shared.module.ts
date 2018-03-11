import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { LoaderComponent } from "./loader/loader.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from "primeng/panel";
import { InputTextModule, ButtonModule } from "primeng/primeng";
@NgModule({
  imports: [CommonModule, TableModule, ReactiveFormsModule, PanelModule, ButtonModule, InputTextModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, TableModule, ReactiveFormsModule, PanelModule, ButtonModule, InputTextModule]
})
export class SharedModule {}
