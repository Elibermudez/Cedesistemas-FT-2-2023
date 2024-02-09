import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const authGuarGuard: CanActivateFn = (route, state) => {
 var token = localStorage.getItem('token');

 if (token) {
  return true;
 }

 return inject(Router).createUrlTree(['/fullscreen/login']);

};


