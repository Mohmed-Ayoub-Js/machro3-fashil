import { NextResponse , NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req : NextRequest , res : NextResponse){
    try{
     const {username , password} = await res.json();
     if(!username || !password){
        return NextResponse.json({message:'useranme or password is null'});
     }
     const checkisUserExisit = await db.user.findFirst({
        where: {
            username : username,
        }
     })
     if(checkisUserExisit){
        if(checkisUserExisit.password === password){
            return NextResponse.json({message:'تم تسجيل الدخول'})
        }
     } else {
        return NextResponse.json({message:'الحساب غير موجود'})
     }
    }
    catch(err){
        console.log(err);
    }
    finally{
        await db.$disconnect();
    }
}