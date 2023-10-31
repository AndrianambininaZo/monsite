import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppClientComponent } from './client/app-client/app-client.component';
import { DasboardClientComponent } from './client/dasboard-client/dasboard-client.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  {path:'',pathMatch:'full',component:AppClientComponent,children:[
    {path:'',component:DasboardClientComponent}
  ]}


  /*
  { path: 'eshop_admin', component: AppAdminComponent, children: [
    { path: '', component: DasboardAdminComponent },
  ] },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
