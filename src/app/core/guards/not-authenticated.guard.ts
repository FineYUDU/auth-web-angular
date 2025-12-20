import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';

import { AuthApi } from '@core/http/auth-api';
import { firstValueFrom } from 'rxjs';

export const NotAuthenticatedGuard: CanMatchFn = async (
    route: Route,
    segments: UrlSegment[]
) => {

    const auth = inject( AuthApi );

    const router = inject( Router );

    const isAuthenticated = await firstValueFrom( auth.checkStatus() )

    if( isAuthenticated ) {
        router.navigateByUrl('/dashboard')
        return false
    } 

    return true;
}