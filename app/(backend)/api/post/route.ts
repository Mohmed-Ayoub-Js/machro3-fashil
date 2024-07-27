import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req : NextRequest , res : NextResponse){
    try{
    const {cat , userId} = await req.json();
    const data = await db.post.findMany({
        where : {
            cetegory : cat,
        },
        include: {
            user: true,
        },
        orderBy: {
            createdAt: 'desc'  
        },
    });
    const me = await db.post.findFirst({
        where : {
            userID : userId,
        },
        include: {
            user: true,
        },
        orderBy: {
            createdAt: 'desc'  
        },
        take: 1, 
    });
    
    return NextResponse.json({
        me : me,
        all : data,
    });
    }
    catch(err){
        console.log(err);
    }
    finally{
        await db.$disconnect();
    }
}