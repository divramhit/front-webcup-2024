import { customServerFetch } from "@/lib/api";
import { CardWithMeteors } from "@/components/aceternity-ui/CardWithMeteors";
import PostDelete from "@/components/posts/PostDelete";

export default async function Posts() {

    async function getPosts() {
        const data = await customServerFetch('/posts', "GET");
        return data ?? [];
    }

    const posts = await getPosts();

    return (
        <>
            {
                posts.map(post => {
                    const postDeleteAction = <PostDelete id={post.id}/>
                    const postActions = [postDeleteAction];
                    return <>
                        <CardWithMeteors id={post.id} title={post.title} content={post.content} actions={postActions}/>
                    </>
                })
            }
        </>
    )
}