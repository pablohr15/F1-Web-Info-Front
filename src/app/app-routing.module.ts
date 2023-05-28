import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { DetailDriverComponent } from './detail-driver/detail-driver.component';

const routes: Routes = [
  {path : 'drivers', component : ListDriversComponent},
  {path : '', redirectTo:'drivers', pathMatch:'full'},
  {path : 'drivers/:id', component : DetailDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
