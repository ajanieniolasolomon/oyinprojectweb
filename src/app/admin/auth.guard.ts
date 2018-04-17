import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AngularFireAuth,
    private router: Router
  ) {}
  canActivate () {
    return this.authService.auth.getRedirectResult().then(result => {
      if (result.user != null) {
        this.router.navigate(['admin/home/dash']);
        return false;
      }
      return true;
    });
  }
}
