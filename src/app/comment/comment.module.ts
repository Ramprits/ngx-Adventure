import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentComponent } from "./comment.component";
import { CommentRoutingModule } from "@app/comment/comment.routing";
import { SharedModule } from "@app/shared";

@NgModule({
  imports: [CommonModule, CommentRoutingModule, SharedModule],
  declarations: [CommentComponent]
})
export class CommentModule {}
