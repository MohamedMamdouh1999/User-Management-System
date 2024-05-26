import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/iuser';
import { ApiClientService } from '../../shared/services/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiClientService: ApiClientService) { }

  onLogin(data: IUser): Observable<IUser> {
    return this.apiClientService.post<IUser>("auth/login", data);
  }
}
