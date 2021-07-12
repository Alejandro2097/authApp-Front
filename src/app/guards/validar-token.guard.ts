import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService){}
  canActivate(): Observable<boolean> | boolean   {
    console.log('can activate');
    return this.authService.validarToken();
  }
  canLoad(): Observable<boolean> | boolean  {
    console.log('can load');
    return true;
  }
}
