import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobilephone: string;
  constructor(private authService: AuthService, private router: Router) { }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  login() {
    if (this.mobilephone == null) {
      alert('Please check phone');
      return;
    }
    this.authService.login(this.mobilephone).subscribe(
      response => {
        this.authService.savePerson(response.customer);
        this.router.navigate(['/']);
      },
      error => {
        if (error.status === 400) {
          alert('User or password wrong');
        }
      });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

}
