import { NextResponse } from 'next/server'
import { getSession } from './actions/actions'

// 1. Specify protected and public routes
const protectedRoutes = ['/posts']
const publicRoutes = ['/login', '/signup', '/maintenance']
 
export default async function middleware(req) {
    // Redirect to maintenance if in production and not already on the maintenance page
    if (req.nextUrl.pathname === '/maintenance') {
        return NextResponse.next()
    }
    if (process.env.NODE_ENV === "production" && req.nextUrl.pathname !== '/maintenance') {
        return NextResponse.redirect(new URL('/maintenance', req.nextUrl));
    }

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    
    // 3. Decrypt the session from the cookie
    const session = await getSession();
    const isAuthenticated = session?.authenticated;
        
    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    
    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        isAuthenticated &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }
    
    return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}