import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export function GET() {
  return NextResponse.json({
    email: "Harsh@harsh.com",
    name: "harsh",
  });
}

// in react
// app.get("/api/user",(res,rep)=>{
//     res.json({
//         email:"Harsh@harsh.com",
//         name:"harsh"
//     })
// })

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    body,
  });
}
