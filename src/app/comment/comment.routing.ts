import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { extract } from "@app/core";
import { CommentComponent } from "@app/comment/comment.component";
import { CommentResolveService } from "@app/comment/comment.resolve.service";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: "",
    component: CommentComponent,
    resolve: { resolvedBooks: CommentResolveService },
    data: { title: extract("comment") }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CommentRoutingModule {}
