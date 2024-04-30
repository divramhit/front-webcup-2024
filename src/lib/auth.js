export const sessionOptions = {
    password : process.env.AUTH_SECRET,
    cookieName: "puddlepirates",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
}