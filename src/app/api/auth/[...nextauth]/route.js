import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";

export const authOptions = {
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: '',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const res = await fetch("http://localhost:8000/auth", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })

                const user = await res.json()
                
                // If no error and we have user data, return it
                if (res.ok && user) {
                    const token = user.token;
                    const data = jwtDecode(token);
                    data.token = token
                    return data
                }

                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return {...token, ...user}
        },
        async session({ session, token }) {
           
            return {...session, ...token}
        }
    },
}

const handler = NextAuth({
    ...authOptions
});

export { handler as GET, handler as POST }