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
    return <div>{children}</div>;
  } else {
    redirect("/");
  }
}
