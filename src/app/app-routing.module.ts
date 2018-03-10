import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { Route } from "@app/core";

const routes: Routes = [
  Route.withShell([{ path: "about", loadChildren: "app/about/about.module#AboutModule" }]),
  Route.withShell([{ path: "comments", loadChildren: "app/comment/comment.module#CommentModule" }]),
  Route.withShell([{ path: "customer", loadChildren: "app/customer/customer.module#CustomerModule" }]),
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
