import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {
  swt = 1
  bordback = 'background-color: rgb(80, 130, 153)'
  linkPdf = '/assets/pdfsdnd5e/GM.pdf'
  
  constructor() { }

  select(id: number){
    switch(id){
      case 0:
        this.bordback = 'background-color: rgb(107, 74, 123);'
        this.swt = 0
        this.linkPdf = '/assets/pdfsdnd5e/GM.pdf'
        break;
      case 1:
        this.bordback = 'background-color: rgb(80, 130, 153);'
        this.swt = 1
        this.linkPdf = '/assets/pdfsdnd5e/MM.pdf'
        break;
      case 2:
        this.bordback = 'background-color: rgb(236, 135, 37);'
        this.swt = 2
        this.linkPdf = '/assets/pdfsdnd5e/LDJ.pdf'
        break;
    }
  }

  ngOnInit(): void {
  }

}
