"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn, useSession } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "اسم الحساب مطلوب",
  }),
  email: z.string().min(1, {
    message: "كلمة السر مطلوبة",
  }),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await signIn("credentials", values);
  }
  return (
    <div className=" h-screen bg-black text-white  flex justify-center items-center flex-col">
      <div className=" text-xl md:text-4xl font-extrabold">
        انشاء حسابك في منصة خواطر
      </div>

      <div className=" w-1/2">
        <p className="font-bold text-2xl mb-2 mt-2">انشاء حساب</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الحساب</FormLabel>
                  <FormControl>
                    <Input placeholder="اسم الحساب" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>كلمة السر</FormLabel>
                  <FormControl>
                    <Input placeholder="كلمة السر" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className=" text-sm text-gray-500">
              قبل تسجيل الدخول ، هذه المنصة تقوم بتطبيق نظام صارم ضد كل شيء
              يخالف الشريعة الاسلامية
            </p>
            <Button className=" w-full" type="submit">
              انشاء الحساب
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
