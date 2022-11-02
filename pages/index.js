import Link from "next/link"
import User from "../components/user"

export default function Home({users}) {
  return (
    <>
    <Link href='/posts'>
    <h1>Posts</h1>
    </Link>
    <h1>List of users</h1>
    {users.map(user=>{
      return(
        <div key={user.id}>
        <User user={user}/>
        <Link href='/posts'>Posts</Link>
        </div>
      )
    })}
  </>
  )
}

export async  function  getStaticProps(){
 const response = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await response.json()
 return{
  props:{
      users:data
  }
 }
}