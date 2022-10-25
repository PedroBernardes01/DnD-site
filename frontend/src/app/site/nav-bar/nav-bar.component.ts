import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  drop = ['display: none;', 'display: none;', 'display: none;']

  constructor(private router: Router) { }

  goto(rout: string): void {
    this.router.navigate([rout])
  }

  dropdown(id: number):void{
    if(this.drop[id] == 'display: none;'){
      this.drop[id] = 'display: block;'
    }
    else{
      this.drop[id] = 'display: none;'
    }
  }
} 