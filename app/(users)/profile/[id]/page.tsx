import Profile from "@/components/profile/Profile";
import React from "react";

const ProfilePage = ({params} : any) => {
  return (
    <div className=" bg-black">
      <Profile id={params.id}/>      
    </div>
  );
};

export default ProfilePage;
