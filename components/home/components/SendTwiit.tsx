"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SendTwiit = ({ userData }: any) => {
  const [post, setPost] = useState("");
  const [cet, setCet] = useState("");
  const [myPostData, setmyPostData] = useState<any>();
  const [favCat, setFavCat] = useState([]);
  const [favCatdefault, setFavCatdefault] = useState("pelstine");
  const [postMe, setPostMe] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [updatePosts, setUpdatePosts] = useState(0);
  useEffect(() => {
    const fav = localStorage.getItem("fav");
    if (!fav) {
      setFavCatdefault("pelstine");
    } else {
      setFavCatdefault(fav);
    }
  }, [updatePosts]);

  useEffect(() => {
    axios
      .post("/api/post", { cat: favCatdefault, userId: userData?.id })
      .then((res) => {
        console.log(res);
        setmyPostData(res.data.me);
        setAllPosts(res.data.all);
        setPost("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updatePosts]);

  return (
    <div>
      <div className="flex">
        <div className="m-2 w-10 py-1">
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

        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
            className=" bg-transparent text-gray-400 font-medium text-lg w-full"
            placeholder="مالذي يدور في ذهنك"
          />
        </div>
      </div>
      <div className=" mt-2 mb-2 p-2 text-white">
        <Select
          onValueChange={(e) => {
            setCet(e);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder="المجال"
              className=" placeholder:text-white"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pelstine">قضية فلسطين</SelectItem>
            <SelectItem value="sport">الرياضة</SelectItem>
            <SelectItem value="polotique">السياسة</SelectItem>
            <SelectItem value="play">الترفيه</SelectItem>
            <SelectItem value="tech">التكنولوجيا</SelectItem>
            <SelectItem value="money">الاقتصاد</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" p-4">
        <Button
          onClick={() => {
            axios
              .post("/api/createpost", {
                body: post,
                category: cet,
                userId: userData,
              })
              .then((res) => {
                setUpdatePosts((updatePosts) => updatePosts + 1);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          className=" w-full mt-2 mb-2"
        >
          <Send />
        </Button>
      </div>
      <div className=" h-full">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <a className="flex-shrink-0 group block" href="#">
            <div className="flex items-center">
              <div>
                <img
                  alt=""
                  className="inline-block h-10 w-10 rounded-full"
                  src={
                    myPostData?.user?.profile == null
                      ? userData?.profile
                      : "https://cdn-icons-png.freepik.com/512/149/149071.png"
                  }
                />
              </div>
              <div className="mr-3">
                <p className="text-base leading-6 font-medium text-white">
                  {myPostData?.user?.username}
                  <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    @{myPostData?.user?.username}
                  </span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="pr-16">
          <p className="text-base width-auto font-medium text-white flex-shrink">
            {myPostData?.body}
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

        {allPosts.map((item: any) => (
          <div key={item.id}>
            <div className="flex flex-shrink-0 p-4 pb-0">
              <a className="flex-shrink-0 group block" href="#">
                <div className="flex items-center">
                  <div>
                    <img
                      alt=""
                      className="inline-block h-10 w-10 rounded-full"
                      src={
                        item?.user?.profile == null
                          ? userData?.profile
                          : "https://cdn-icons-png.freepik.com/512/149/149071.png"
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
    </div>
  );
};

export default SendTwiit;
