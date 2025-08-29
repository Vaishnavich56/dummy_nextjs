
"use client"

import { useState } from "react";
import { User } from "../util/db";

export default function AddUser()
{
    let [name,setName]=useState("")
        let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [error,setError]= useState("")

    const addUser = async()=>
    {
    let resp =  await fetch("http://10.193.173.250:3000/api/users/",
    { method:"Post",
    body:JSON.stringify({name,age,email})  
    });
    let data = await resp.json();
    if(!data.ok)
    {
   setError(data.result)
    }
    }
    return (
        <>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <input value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={addUser}>Add User</button>
        <button onClick={updateUser}>Add User</button>

        <div>{error}</div>
        </>
    )
}