function Post({title, content}) {

    return (
        <article className="card">
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}

export default Post;