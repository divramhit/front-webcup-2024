import { CardWithMeteors } from "@/components/aceternity-ui/CardWithMeteors";
import PostDelete from "@/components/posts/PostDelete";
import { getSession } from "@/actions/actions";


export default async function Posts() {
    
    const session = await getSession();

    async function getPosts() {
        // const data = await customServerFetch('/posts', "GET");
        return [];
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
            {JSON.stringify(session)}
        </>
    )
}