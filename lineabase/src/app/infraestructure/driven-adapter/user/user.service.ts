import { Injectable } from '@angular/core';
import { GenericService } from '../../helpers/generic.service';
import { Observable } from 'rxjs';
import { User } from '../../../domain/models/User/user';
import { UserResponse } from '../../../domain/models/User/user-response';
import { UserGateway } from '../../../domain/models/User/gateway/user-gateway';
import { Token } from '../../../domain/models/User/token';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {

  private _url = 'http://localhost:3000'
  constructor(private genericService: GenericService) {super(); }

  login(email: String, password: String): Observable<Token> {
    return this.genericService.post<Token>(this._url, 'users/login', {email, password})
  }

  signup(user: User):
  Observable<UserResponse> {
    return this.genericService.post<UserResponse>(this._url, 'users/login', user)
  }
}

