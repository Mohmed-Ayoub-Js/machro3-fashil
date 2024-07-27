"use client";


import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import axios from 'axios';
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  banner: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  profile: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  id: z.string().readonly(),
})
const ProfileContent = ({userData , tweetNumber , posts} :any) => {
  console.log(userData);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData.username,
      id : userData.id,
      banner: userData.banner,
      profile: userData.profile,

    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    axios.post("/api/update" , values).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  return ( 
    <div className=' w-full h-full'>
<div>
  <div className="flex justify-start">
    <div className="px-4 py-2 mx-2">
      <a
        href=""
        className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right"
      >
        <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
      </a>
    </div>
    <div className="mx-2">
      <h2 className="mb-0 text-xl font-bold text-white">
        {userData.username}
      </h2>
      <p className="mb-0 w-48 text-xs text-gray-400">{tweetNumber} Tweets</p>
    </div>
  </div>
  <hr className="border-gray-800" />
</div>
<div>
  <div
    className="w-full bg-cover bg-no-repeat bg-center"
    style={{
      height: 200,
      backgroundImage:
        userData?.banner == '' ?  "url('https://al3omk.com/wp-content/uploads/2022/11/6383e660130c9.jpeg')" :  `url('${userData?.banner}')`
    }}
  >
    <img
      className="opacity-0 w-full h-full"
      src={
        userData?.banner == null
          ? userData?.banner
          : "https://cdn-icons-png.freepik.com/512/149/149071.png"
      }         alt=""
    />
  </div>
  <div className="p-4">
    <div className="relative flex w-full">
      {/* Avatar */}
      <div className="flex flex-1">
        <div style={{ marginTop: "-6rem" }}>
          <div
            style={{ height: "9rem", width: "9rem" }}
            className="md rounded-full relative avatar"
          >
            <img
              style={{ height: "9rem", width: "9rem" }}
              className="md rounded-full relative border-4 border-gray-900"
              src={
                userData?.profile == ""
                  ?  "https://cdn-icons-png.freepik.com/512/149/149071.png"
                  : userData?.profile
              }              alt=""
            />
            <div className="absolute" />
          </div>
        </div>
       
       
      </div>
      
      {/* Follow Button */}
      <div className="flex flex-col text-right">
      <Dialog>
  <DialogTrigger>

  <button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
         تعديل الحساب
        </button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-white'>تعديل حسابي</DialogTitle>
      <DialogDescription>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اسم الحساب</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رابط صورة الحساب</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رابط صورة الخلفية</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=' w-full'>تعديل حسابي</Button>
        <Link href={"/settings"}>
        <p className=' text-red-500 mt-4 flex justify-center items-center flex-col cursor-pointer'>
          الاعدادات المتقدمة
        </p>
        </Link>

      </form>
    </Form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      </div>
      
    </div>
  </div>
</div>
<>
  <div className="space-y-1 justify-center w-full mt-3 ml-3">
    {/* User basic*/}
    <div>
      <h2 className="text-xl leading-6 font-bold text-white">
      {userData?.username}
      </h2>
      <p className="text-sm leading-5 font-medium text-gray-600">
        @{userData?.username}
      </p>
    </div>
    {/* Description and others */}
    <div className="mt-3">
      <p className="text-white leading-tight mb-2">
      {userData?.bio}
      </p>
      <div className="text-gray-600  hidden"> {/* flex (true) , hidden(false) **/ }
        <span className="flex mr-2">
          <svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon">
            <g>
              <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" />
              <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z" />
            </g>
          </svg>{" "}
          <a
            href="https://ricardoribeirodev.com/personal/"
            target="#"
            className="leading-5 ml-1 text-blue-400"
          >
            www.RicardoRibeiroDEV.com
          </a>
        </span>
        <span className="flex mr-2">
          <svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon">
            <g>
              <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z" />
              <circle cx="7.032" cy="8.75" r="1.285" />
              <circle cx="7.032" cy="13.156" r="1.285" />
              <circle cx="16.968" cy="8.75" r="1.285" />
              <circle cx="16.968" cy="13.156" r="1.285" />
              <circle cx={12} cy="8.75" r="1.285" />
              <circle cx={12} cy="13.156" r="1.285" />
              <circle cx="7.032" cy="17.486" r="1.285" />
              <circle cx={12} cy="17.486" r="1.285" />
            </g>
          </svg>{" "}
          <span className="leading-5 ml-1">Joined December, 2019</span>
        </span>
      </div>
    </div>
    <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
      <div className="text-center pr-3">
        <span className="font-bold text-white">520</span>
        <span className="text-gray-600"> Following</span>
      </div>
      <div className="text-center px-3">
        <span className="font-bold text-white">8 مليار </span>
        <span className="text-gray-600"> Followers</span>
      </div>
    </div>
  </div>
  <hr className="border-gray-800" />
  <ul className="list-none">
    <li></li>
  </ul>
</>

{posts.map((item: any) => (
          <div key={item.id}>
            <div className="flex flex-shrink-0 p-4 pb-0">
              <a className="flex-shrink-0 group block" href="#">
                <div className="flex items-center">
                  <div>
                    <img
                      alt=""
                      className="inline-block h-10 w-10 rounded-full"
                      src={
                        item?.user?.profile == null ?   "https://cdn-icons-png.freepik.com/512/149/149071.png":item?.user?.profile
                      }
                    />
                  </div>
                  <div className="mr-3">
                    <p className="text-base leading-6 font-medium text-white">
                      {item?.user?.username}
                      <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @{item?.user?.username}
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="pr-16">
              <p className="text-base width-auto font-medium text-white flex-shrink">
                {item?.body}
              </p>
              <div className="flex">
                <div className="w-full">
                  <div className="flex items-start justify-start flex-row">
                    <div>
                      <a
                        className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                        href="#"
                      >
                        <svg
                          className="text-center h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                        href="#"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProfileContent