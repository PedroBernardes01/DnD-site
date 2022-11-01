import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  senhaFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(rout: string): void {
    this.router.navigate([rout])
  }
}
