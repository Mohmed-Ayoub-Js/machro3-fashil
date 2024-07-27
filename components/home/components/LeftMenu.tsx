import getUserData from "@/actions/getUserData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LeftMenu = async ({ userData }: any) => {
  return (
    <div className="w-2/5 text-white pr-32 py-4 h-auto">
      <p className=" text-2xl">مشروع فاشل</p>
      <nav className="mt-5 px-2">
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          الرئيسية
        </a>
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
          المحتوى الرائج
        </a>
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          الاشعارات
        </a>
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          الرسائل
        </a>
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          المفضلة
        </a>

        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          حسابي
        </a>
        <a
          className="group mt-2 mb-2 p-5 flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-black text-white hover:bg-gray-500"
          href="#"
        >
          <svg
            className="mr-4 h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          المزيد
        </a>
        <Button className=" w-full mb-3 mt-2">نشر خاطرة</Button>
      </nav>
      <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
        <Link
          className="flex-shrink-0 group block"
          href={`/profile/${userData?.id}`}
        >
          <div className="flex items-center">
            <div>
              <img
                alt=""
                className="inline-block h-10 w-10 rounded-full"
                src={
                  userData?.profile == null
                    ? userData?.profile
                    : "https://cdn-icons-png.freepik.com/512/149/149071.png"
                }
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white">
                {userData?.username}
              </p>
              <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @{userData?.username}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
