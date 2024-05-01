import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export default async function AddPost() {
    async function addPost(formData) {
        'use server'
        // const title = formData.get("title");
        // const content = formData.get("content");

        // const data = {
        //     'title' : title,
        //     'content' : content,
        // }

        // const response = await customServerFetch("/posts/create", "POST", data);
        // redirect('/dashboard')
        console.log(formData);
    }

    return (
        <>
            <form action={addPost}>
                Add Post
                <Input type="text" name="title" label='Title' />
                <Input type="textarea" name="content" label ="Content" />
                <Button type="submit">Add post</Button>
            </form>
        </>
    )
}
