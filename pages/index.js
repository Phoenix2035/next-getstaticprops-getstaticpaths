import Link from "next/link"

function Home(props) {

    return (
        <ul>
            {
                props.posts.map(post =>
                    <li style={{ margin: "20px" }} key={post.id}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <a>
                                {post.title}
                            </a>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return {
        props: {
            posts
        }
    }

}

export default Home
