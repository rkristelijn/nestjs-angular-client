import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { MainComponent } from "./core/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: MainComponent }
      //   {
      //     path: "projects",
      //     loadChildren: "./projects/projects.module#ProjectsModule",
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: "customers",
      //     loadChildren: "./customers/customers.module#CustomersModule",
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: "profile",
      //     loadChildren: "./profile/profile.module#ProfileModule",
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: "charts",
      //     loadChildren: "./charts/charts.module#ChartsDataModule",
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: "admin-panel",
      //     component: AdminComponent,
      //     canActivate: [AdminGuard]
      //   }
    ]
  },
  // { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
