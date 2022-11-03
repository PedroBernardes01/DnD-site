import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from './../BD/user.model';
import { AllService } from './../BD/all.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  senhaFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  senV = 'password'
  eye = 'visibility_off'

  user: user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private router: Router, private service: AllService) { }

  ngOnInit(): void {
  }

  goto(rout: string): void {
    this.router.navigate([rout])
  }

  vis(): void {
    switch(this.senV){
      case 'password':
        this.senV = 'text'
        this.eye = 'visibility'
        break;
      case 'text':
        this.senV = 'password'
        this.eye = 'visibility_off'
        break;
    }
  }

  cadas(): void {
  }
}
