export const sessionOptions = {
    password : process.env.AUTH_SECRET,
    cookieName: "puddlepirates",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
}

export const getClientSession = async () => {
    const sessionResponse = await fetch('/app/api/auth/session', {
        method: "GET"
    }).catch(e => console.error(e));

    if (sessionResponse.status === 200) {
        const session = await sessionResponse.json();
        return session;
    }

    return null;
}