import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.logout();
  }

  logout(): void {
    this.authService.logout().subscribe(
      (response:any) => {
        
        // console.log(response.success)
        if(response.success == 'true')  {
          this.router.navigate(['/login']);
        }

      }
    );
  }

}