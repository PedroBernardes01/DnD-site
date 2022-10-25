import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  table = 0

  constructor() { }

  sel(id: number): void{
    if(id == 0){
      this.table
    }
  }

  ngOnInit(): void {
  }
}
