export default function Post({post}) {
    return (
        <>
        <h2>
            {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
        </>
    )
}

// This is the only way to handle hundreds of posts if there are
export async function getStaticPaths(){
    const paths = [];
    for(let i = 0; i<105; i++){
        let paramObj = {params: ""};
        paramObj.params = {postId: `${i}`}
        paths.push(paramObj);
    }
    console.log(paths)
    return {
        paths: paths,
        fallback: false
    }
}
// export async function getStaticPaths(){
//  return {
//     paths:[
//         {
//             params:{postId:'1'}
//         },
//         {
//             params:{postId:'2'}
//         },
//         {
//             params:{postId:'3'}
//         },
//     ],
//     fallback: false
//  }
// }


export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    
    return {
        props:{
            post:data,
        }
    }
}