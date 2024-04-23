'use client'

import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { customClientFetch } from "@/lib/api";

export default function PostDelete({id}) {
    const [deleting, setIsDeleting] = useState(false);
    const router = useRouter();

    async function handleDeletePost() {
        setIsDeleting(true)
        const response = await customClientFetch(`/posts/${id}`, 'DELETE');
        router.refresh();
    }

    return (
        <>
            <Button isLoading={deleting} onClick={handleDeletePost} color="danger" variant="ghost">
                Delete
            </Button>  
        </>
    )
}   