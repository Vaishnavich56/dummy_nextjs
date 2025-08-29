"use client"

import React, { useEffect, useState } from "react"

export default function Update({params})
{
    let {userid} = React.use(params);
let [name,setName]=useState("")
        let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [error,setError]= useState("")
    useEffect(()=>
    {
        getUserDetails()
    },[])
    const getUserDetails = async()=>
    {
    let resp =  await fetch(`http://10.193.173.250:3000/api/users/${userid}`)
    let data = await resp.json();
   
        setName(data[0].name)
       setAge(data[0].age)
        setEmail(data[0].email)

    
    }

    const updateUser = async()=>
    {
    let resp =  await fetch(`http://10.193.173.250:3000/api/users/${userid}`,{
        method:"PUT",
        body:JSON.stringify({name,age,email})
    })
    let data = await resp.json();
    
     }

    return (
        <>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <input value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={updateUser}>Update User</button>

        <div>{error}</div>
        </>
    )
}