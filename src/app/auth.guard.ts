import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private _router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('FacebookKsiegaToken')) {
            return true;
        }
 
        this._router.navigate(['/login']);
        return false;
    }
}