import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dndicon = 'filter: contrast(100%) brightness(0%);'

  constructor() { }

  ngOnInit(): void {
  }

}
