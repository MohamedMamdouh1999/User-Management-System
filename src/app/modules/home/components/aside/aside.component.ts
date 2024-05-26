import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { IUser } from 'src/app/modules/shared/interfaces/iuser';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  user: IUser = {} as IUser;
  
  constructor(private router: Router) { };
  ngOnInit(): void {
    if(localStorage.getItem("token") !== null){
      this.user = jwtDecode(localStorage.getItem("token")!);
    }
  }

  signOut(): void {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
