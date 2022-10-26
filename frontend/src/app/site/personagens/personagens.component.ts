import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  sel = 0;
  constructor() {}

  ngOnInit(): void {
  }
  Move(id: number){
    if (id == 0 && this.sel <=1){
      this.sel++
    }
    if (id == 1 && this.sel >= 0){
      this.sel--
    }
  }
}
