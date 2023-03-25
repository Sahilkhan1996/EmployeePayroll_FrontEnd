import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpFormComponent } from './component/emp-form/emp-form.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [ 
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'emp-form',component:EmpFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
