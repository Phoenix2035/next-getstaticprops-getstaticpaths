import Link from "next/link";


function SingleBlog({ post }) {

    return (
        <>

            <Link href="/" as="/" >
                <a style={{ width: "100px", padding: "10px", backgroundColor: "skyblue", display: "flex", alignItems: "center", justifyContent: "center" }}>Back</a>
            </Link>


            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>
        </>
    )
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }

    })

    return {
        paths,
        fallback: false
    }

}

export default SingleBlog