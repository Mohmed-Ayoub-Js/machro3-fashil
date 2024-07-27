import { db } from '@/lib/db';
import { options } from '@/lib/options';
import { getServerSession } from 'next-auth';


export default async function getUserData(){
    try{
     const user = await getServerSession(options);
    const userData = await db.user.findFirst({
        where : {
          username : user?.user?.name as string, 
        }
    })
    return userData;
    }catch(err){
        console.log(err);
    }finally{
        await db.$disconnect();
    }
}