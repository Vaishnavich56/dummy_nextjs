import Link from "next/link";

export async function getUserData()
{
let resp =  await fetch("http://10.193.173.250:3000/api/users/");
let data = await resp.json();
return data
}
export default async function User()
{
let data = await getUserData();
    return (
        <>
        {data && data.map((item)=>
        (
            <div key={item.id} style={{display:"block",margin:"10px"}}>
             <Link style={{margin:"10px"}} href={`/users/${item.id}`} key={item.id}>{item.name}</Link>
            <Link style={{margin:"10px"}} href={`/users/${item.id}/update`}>Edit</Link>
           <Link  style={{margin:"10px"}} href={`/users/${item.id}/delete`}>Delete</Link>

            </div>
           
        ))}
        </>
    )
}