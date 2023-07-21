import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Rotas
import { AdminRoutingModule } from './admin-routing.module';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})

export class AdminModule { }