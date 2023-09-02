import Link from "next/link";
import { LikeButton } from "./LikeButton";

{/* FETCH en el servidor */}
const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    .then(res => res.json())
}

{/* Función asíncrona */}
export async function ListOfPosts(){
    {/* posts recibe el JSON del método fetchPosts */}
    const posts = await fetchPosts();


    {/* Se recorre cada elemento del JSON con map */}
    return(
        <>
            {/* Se puede añadir ".slice(0,5)" antes del .map para devolver los primero 5 elementos */}
            {posts.slice(0,5).map(post =>(
                <article key={post.id}>
                    <Link href={`/Posts/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </Link>
                    <LikeButton id={post.id}/>
                </article>
            ))}
        </>    
    )
}