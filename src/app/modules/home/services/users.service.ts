import { Injectable } from '@angular/core';
import { ApiClientService } from '../../shared/services/api-client.service';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private apiClientService: ApiClientService) { }

  getUsers(): Observable<IUser[]>{
    return this.apiClientService.get<IUser[]>("users");
  }
}
