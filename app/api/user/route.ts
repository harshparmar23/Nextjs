import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

const client = new PrismaClient();

// export function GET() {
//   return NextResponse.json({
//     email: "Harsh@harsh.com",
//     name: "harsh",
//   });
// }

// in react
// app.get("/api/user",(res,rep)=>{
//     res.json({
//         email:"Harsh@harsh.com",
//         name:"harsh"
//     })
// })

export async function GET() {
  const user = await client.user.findFirst({});
  console.log(user);
  return Response.json({ name: user?.username, email: user?.username });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // should add zod validation here
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: "Signed up" });
}
