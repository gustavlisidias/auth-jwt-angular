import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {

  public tema: string = 'light';

  public mudarTema() {
    if (this.tema === 'light') {
      this.tema = 'dark';
    } else {
      this.tema = 'light';
    }
  }

}
