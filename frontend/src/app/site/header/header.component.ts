import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  goto(rout: string): void {
    this.router.navigate([rout])
  }

  ngOnInit(): void {
  }

}
