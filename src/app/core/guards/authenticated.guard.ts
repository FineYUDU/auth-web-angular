import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthApi } from '@core/http/auth-api';
import { firstValueFrom } from 'rxjs';

export const AuthenticatedGuard: CanMatchFn = async (
    route: Route,
    segments: UrlSegment[]
) => {
    const auth = inject( AuthApi );
    const router = inject( Router );

    const isAuthenticated = await firstValueFrom( auth.checkStatus() );

    console.log('AuthenticatedGuard');
    console.log({isAuthenticated});
    console.log({status:auth.authStatus()});


    if( !isAuthenticated ) {
        router.navigateByUrl('/auth')
        return false
    }
    return true;
}