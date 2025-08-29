
export async function getUser(id)
{
let resp =  await fetch(`http://10.193.173.250:3000/api/users/${id}`);
let data = await resp.json();
return data
}
export default async function User({params})
{
    console.log(params)
let data = await getUser(params.userid);
    return (
        <>
        {data && data.map((item)=>
        (
            <div key={item.id} >
            <div>{item.name}</div>
<div>{item.age}</div>
<div>{item.id}</div>
            
            </div>



        ))}
        </>
    )
}