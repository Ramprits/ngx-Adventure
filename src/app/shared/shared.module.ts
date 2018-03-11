import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { LoaderComponent } from "./loader/loader.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from "primeng/panel";
import { InputTextModule, ButtonModule } from "primeng/primeng";
import { DialogModule } from "primeng/dialog";
@NgModule({
  imports: [CommonModule, TableModule, DialogModule, ReactiveFormsModule, PanelModule, ButtonModule, InputTextModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, TableModule, DialogModule, ReactiveFormsModule, PanelModule, ButtonModule, InputTextModule]
})
export class SharedModule {}
