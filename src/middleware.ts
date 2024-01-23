import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt_decode from 'jwt-decode';

type RouteConfig = {
    path: string;
    roles: string[];
};

const PROTECTED_ROUTES: RouteConfig[] = [
    { path: '/pre-register', roles: ['admin'] },
    { path: '/dashboard/:path*', roles: ['admin', 'user'] },
];

export const middleware = (request: NextRequest) => {
    const redirectToLogin = () => NextResponse.redirect(new URL('/login', request.url));

    const userToken = request.cookies.get('@swift-stock: user-token');
    if (!userToken) return redirectToLogin();

    let decoded: any;

    try {
        decoded = jwt_decode(userToken.value);
    } catch (error) {
        return redirectToLogin();
    }

    const userRole: string = decoded.Role || '';

    for (const route of PROTECTED_ROUTES) {
        if (request.nextUrl.pathname.startsWith(route.path)) {
            if (!route.roles.includes(userRole)) {
                return redirectToLogin();
            }
        }
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard/:path*', '/pre-register'],
};
