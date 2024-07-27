import { db } from "@/lib/db";
import { options } from "@/lib/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getServerSession(options);
  console.log(user);
  if (user == null) {
    redirect("/register");
  } else {
    try {
      const isUserExising = await db.user.findFirst({
        where: {
          username: user?.user?.name as any,
        },
      });
      if (isUserExising) {
        console.log("user good");
      } else {
        const createUser = await db.user.create({
          data: {
            username: user.user?.name as string,
            password: user.user?.email as string,
            profile: "",
            bio: "",
          },
        });
        console.log(createUser);
      }
      return <div>{children}</div>;
    } catch (err) {
      console.log(err);
    } finally {
      await db.$disconnect();
    }
  }
}
