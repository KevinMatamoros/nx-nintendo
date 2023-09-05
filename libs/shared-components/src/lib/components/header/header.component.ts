import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nintendo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  redirectWishList():void {
    this.router.navigate(['wish-list'])
  }

  redirectHome():void {
    this.router.navigate(['/'])
  }
  
}
