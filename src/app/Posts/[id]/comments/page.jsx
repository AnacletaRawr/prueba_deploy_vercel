
const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export default async function Comments ({params}) {

    const {id} = params;

    const comments = await fetchComments(id);
    
    return (
        <ul>
            {comments.map(comment =>(
                <li>
                    <h2>{comment.name}</h2>
                    <h4>{comment.email}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}