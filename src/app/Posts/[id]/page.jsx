import Link from "next/link";

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Post ({params, children}) {

    const {id} = params;

    const post = await fetchSinglePost(id);
    
    return(
    <>
        <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </article>
        <Link href={`/Posts/${id}/comments`}>Ver comentarios</Link>
        {children}
        </>
    )
}