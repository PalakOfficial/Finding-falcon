import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomeComponent } from './components/home/home.component';
import { SucccessPageComponent } from './components/succcess-page/succcess-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: 'Home'}},
  { path: 'success', component: SucccessPageComponent, data: { title: 'Success'}},
  { path: 'select-planet', component: FormPageComponent, data: { title: 'Find Faclon'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
