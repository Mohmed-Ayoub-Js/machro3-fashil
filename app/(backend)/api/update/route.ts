import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req : NextRequest , res : NextResponse){
    try{
      const {name, banner , profile} = await req.json();
      if(!name){
        return NextResponse.json({
            message:'username is null'
        })
      }

  const user = await db.user.findFirst({
    where: { username: name as string },
  });
  
  if (user) {
    const update = await db.user.update({
      where: { id: user.id },
      data: {
        username: name, 
        banner: banner,
        profile: profile,
      },
    });

    return NextResponse.json(update)
  }
  return NextResponse.json({message:'user updated'})
    }
    catch(err){
        console.log(err);
    }
    finally{
        await db.$disconnect();
    }
    
}