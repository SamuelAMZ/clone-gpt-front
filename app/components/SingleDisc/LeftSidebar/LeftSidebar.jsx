"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebase";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

// custom hooks
import notif from "@/app/helpers/notif";

// icons
import { BsChatRightDots } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

// import loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeftSidebar = () => {
  const router = useRouter();

  // keep track of the user instance
  const [user, loading] = useAuthState(auth);

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      notif("successfully logged out");
    } catch (error) {
      console.error(error);
      return;
    }

    // redirect to login page after logout
    router.push("/auth");
  };

  return (
    <div className="iprompt-disc-sidebar left-sidebar-container">
      {/* top elemets */}
      <div className="top-elements">
        {/* logo */}
        <Link href={"/"}>
          <div className="iprompt-logo">
            <Image src={"/logo.png"} width={150} height={150} />
            <p>CloneGPT</p>
          </div>
        </Link>

        {/* <div className="sep"></div>  */}

        {/* current opened disc */}
        <div className="current-disc">
          <p className="small-title">Recently viewed</p>
          <div className="single-current-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <div className="single-current-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <div className="single-current-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <button>Load more</button>
        </div>

        {/* my chats */}
        <div className="my-disc">
          <p className="small-title">Your Chats</p>
          <div className="single-my-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <div className="single-my-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <div className="single-my-disc chat-bull">
            <BsChatRightDots />
            <p>lorem lipsum dolor sit a...</p>
          </div>
          <button>Load more</button>
        </div>
      </div>

      {/* bottom elemets */}
      <div className="left-sidebar-bottom">
        <ul>
          <li>
            <FiHelpCircle />
            <p>Help</p>
          </li>
          {user ? (
            <li>
              <AiOutlineSetting />
              <p>Settings</p>
            </li>
          ) : null}

          {/* logout btn */}
          {user ? (
            <li onClick={handleLogout}>
              <AiOutlineLogout />
              <p>Logout</p>
            </li>
          ) : null}

          {/* login btn */}
          {!user & !loading ? (
            <Link href={"/auth"}>
              <li>
                <AiOutlineLogout />
                <p>Login</p>
              </li>
            </Link>
          ) : null}

          {/* user session loader */}
          {loading ? (
            <SkeletonTheme baseColor="#8b8b8b35" highlightColor="#f9fafb">
              <Skeleton height={30} count={2} />
            </SkeletonTheme>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
