import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Servicos
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent implements OnInit {

  public msgError!: string;

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  })

  public submitForm() {
    if(this.formAuth.valid) {
      this.authService.sign({
        email: this.formAuth.value.email,
        senha: this.formAuth.value.senha
      }).subscribe({
        next: (res) => res,
        error: (err) => (this.msgError = err)
      })
    }
  }

  constructor (private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    
  }

}
