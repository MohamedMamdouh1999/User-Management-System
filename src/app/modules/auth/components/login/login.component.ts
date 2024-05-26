import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }
  
  onLogin(form: NgForm): void {
    if(form.valid){
      this.authService.onLogin(form.value).subscribe({
        next: data => localStorage.setItem("token", data.token),
        complete: () => this.router.navigateByUrl("/home"),
      });
    }
  }
}
