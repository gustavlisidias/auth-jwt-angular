import { Component } from '@angular/core';

// Servicos
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor (private authService: AuthService) {}

  public logout() {
    this.authService.logout();
  }

}
