import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs-compat";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild{
    constructor(private auth: AuthService,
                private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) : 
                Observable<boolean> | Promise<boolean> | boolean{
        return this.auth.isAuthenticated().then(
            (authenticated : boolean)=>{
                if(authenticated){
                    return true;
                }
                this.router.navigate(['']);
            }
        )
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : 
        Observable<boolean> | Promise<boolean> | boolean{
            return this.canActivate(route, state);
    }
}