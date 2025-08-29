import { User } from "@/app/util/db";
import { NextResponse } from "next/server";


export async function GET() {
    let data = User;
    return NextResponse.json(data,{status:200})
}

export async function POST(request) {
     const body = await request.json(); // Must parse the JSON body

  const { name, age, email } = body;
 const missingFields = [];

if (!name) missingFields.push("name");
if (!age) missingFields.push("age");
if (!email) missingFields.push("email");

if (missingFields.length > 0) {
  return NextResponse.json(
    { result: "Please provide required fields: " + missingFields.join(", ") },
    { status: 400 }
  );1
}
    let obj ={
      name:name,
      age:age,
      email:email,
      id:User[User.length-1].id+1
    }
    User.push(obj)

return NextResponse.json({result:"new user added",data:obj},{status:200})
}

