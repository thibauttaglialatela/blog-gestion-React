import Post from "./Post";

function PostList() {

    const posts = [
        { id: 1, titre: "Chien", content: "Le chien est un animal domestique très fidèle et affectueux." },
        { id: 2, titre: "Voiture", content: "La voiture est un moyen de transport très répandu." },
        { id: 3, titre: "Pomme", content: "La pomme est un fruit délicieux et rafraîchissant." },
        { id: 4, titre: "Montagne", content: "La montagne offre des paysages magnifiques et impressionnants." },
        { id: 5, titre: "Livre", content: "Le livre est une source inépuisable de connaissances et d'évasion." }
    ];
    
    return(
        <>
        <h2>Liste des articles</h2>
{posts.map(post => {
    <Post key={post.id} title={post.titre} content={post.content} />
})}
        </>
    )

}

export default PostList;