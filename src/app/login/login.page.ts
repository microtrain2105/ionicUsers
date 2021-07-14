import { Component, OnInit } from '@angular/core';
// 1. Import the service
import { AuthService } from '../auth.service';

// 1. Import the user model
import { User } from '../user.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

      // 2. Instantiate a new user
      user:User = new User();
      // 3. Instantiate an errors array
      error: any;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}  
    
    // 3. Add a login method
    onSubmit(): void{
  
      // this.user.username = 'testuser5';
      // this.user.password = 'test123';
  
      // 2. Remove the hardcoded credentials
      this.authService.login(this.user).subscribe(
        (response:any)=>{
          console.log(response);
  
          if(response.success == false){
            this.error=true;
          }

          if(response.success===true){
            // window.location.href='/#/users';
            this.router.navigate(['/users']);          }
        }
      );
    }


}