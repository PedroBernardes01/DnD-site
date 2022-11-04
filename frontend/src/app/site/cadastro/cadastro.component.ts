import { AllService } from './../BD/all.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from './../BD/user.model';

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
  verEmail: boolean = false

  users!: user[]

  user: user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private router: Router, private srvc: AllService) { }

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
      this.verEmail = false
      this.srvc.getUser().subscribe((user)=>{
      this.users = user
      for(let I=0; I<user.length; I++){
        if(this.users[I].email.toLowerCase() == this.user.email.toLowerCase())
          this.verEmail = true
      }
      if(this.verEmail == false){
        this.srvc.postUser(this.user).subscribe(()=>{
          this.goto('/login')
        })
      }
    })
  }
}
