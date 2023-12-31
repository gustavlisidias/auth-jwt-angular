import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
