import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt_decode from "jwt-decode";


export const middleware = (request: NextRequest) => {
    const redirectToLogin = () => NextResponse.redirect(new URL("/login", request.url));

    const userToken = request.cookies.get("@swift-stock: user-token");
    if(!userToken) return redirectToLogin();
    

    const decoded:any = jwt_decode(userToken.value);
    const isAdmin: boolean = decoded.Role === "admin";

    
    if(request.nextUrl.pathname.startsWith("/pre-register")){
        if(!isAdmin) return redirectToLogin();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/pre-register/"],
}

