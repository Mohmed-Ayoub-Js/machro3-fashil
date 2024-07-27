import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { body, category, userId } = await req.json();
        
        const createPost = await db.post.create({
            data: {
                body: body,
                cetegory: category, // corrected typo in 'category'
                user: {
                    connect: { id: userId.id as string },
                },
            },
        });
        console.log(createPost);
        

        return NextResponse.json({ message: 'Post created' });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    } finally {
        await db.$disconnect();
    }
}
