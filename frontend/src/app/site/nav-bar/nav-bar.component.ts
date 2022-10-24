import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  tst = 'width: 0px;'
  constructor() { }

  aument(): void{
    this.tst = 'width: 400px;'
  }

}