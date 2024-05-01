import { useState, useEffect } from "react";
import { getClientSession } from "@/lib/auth";

export default function useSession() {
    const [session, setSession] = useState({authenticated: false});

    useEffect(() => {
        const updateSession = async () => {
            const session = await getClientSession();
            if (session) setSession(session)
        }
        try {
            updateSession();
        } catch (e) {
            console.log(e);
        }
        
    }, []);

    return {session, setSession};
}