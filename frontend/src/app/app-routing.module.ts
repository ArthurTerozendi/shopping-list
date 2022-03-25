import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: ":id/list",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  // {
  //   path: "**",
  //   component: NotFound
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
