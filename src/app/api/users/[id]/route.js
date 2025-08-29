import { User } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(request,content) {
  const userData = User.filter((item) => item.id == content.params.id);
  return NextResponse.json(userData.length >0? userData:"No Data", { status: 200 });
    
}

export async function PUT(request, { params }) {
  const userId = parseInt(params.id);
  const payload = await request.json();
const index = User.findIndex((u) => u.id === userId);
if (index === -1) {
  return NextResponse.json({ result: "User not found" }, { status: 404 });
}

User[index] = {
  ...User[index],
  name: payload.name,
  age: payload.age, 
  email: payload.email,
};
  return NextResponse.json({ result: "User updated"}, { status: 200 });
}



export async function DELETE(_request, { params }) {
  const userId = parseInt(params.id);
  const index = User.findIndex((u) => u.id === userId);

  if (index === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  const deletedUser = User.splice(index, 1)[0];

  return NextResponse.json({ result: "User deleted", users: User }, { status: 200 });
}
