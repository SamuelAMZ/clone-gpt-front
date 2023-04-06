"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebase";

// react firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";

// custom hooks
import postReq from "../../../helpers/postReq";
import notif from "@/app/helpers/notif";

// react query
import { useQuery } from "react-query";

// icons
import { BsChatRightDots } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

// import loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
    window.location.href = "/auth";
  };

  // fetch user chats
  const handleUserChats = async () => {
    // send req
    return await postReq(
      {
        uid: user?.uid,
        page: "0",
        perPage: "3",
      },
      "/api/user-chats"
    );
  };

  // handle disc histories
  const setHistories = () => {
    let actualHistory = getHistories();

    // remove the 10th item everytime
    if (actualHistory.length >= 10) {
      for (let i = 0; i < actualHistory.length - 9; i++) {
        actualHistory.shift();
      }
    }

    if (actualHistory[actualHistory.length - 1] !== pathname) {
      actualHistory.push(pathname);
    }

    localStorage.setItem("clone-history", JSON.stringify(actualHistory));
  };

  const getHistories = () => {
    let actualHistory = localStorage.getItem("clone-history");
    let actualHistoryArr = JSON.parse(actualHistory);
    return actualHistoryArr?.length > 0 ? actualHistoryArr : [];
  };

  useEffect(() => {
    setHistories();
  }, []);

  const {
    data: userChatsData,
    isLoading: userChatsLoading,
    refetch: getUserChatsData,
  } = useQuery(["user-chats", user], handleUserChats, {
    refetchOnWindowFocus: false,
    enabled: true,
  });

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

          {getHistories()
            .reverse()
            .slice(0, 3)
            .map((elm, idx) => {
              return (
                <div key={idx} className="single-current-disc chat-bull">
                  <BsChatRightDots />
                  <Link href={`${elm}`}>
                    <p>
                      {decodeURIComponent(elm)
                        .replaceAll("/disc/", "")
                        .replaceAll("-", " ")
                        .substr(0, 23)}
                      {elm.length >= 23 && "..."}
                    </p>
                  </Link>
                </div>
              );
            })}

          <Link className="button-like" href={`/recently`}>
            <button>Load more</button>
          </Link>
        </div>

        {/* my chats */}
        <div className="my-disc">
          {user && <p className="small-title">Your Chats</p>}

          {user && userChatsLoading ? (
            <SkeletonTheme baseColor="#8b8b8b35" highlightColor="#f9fafb">
              <Skeleton height={30} count={3} />
            </SkeletonTheme>
          ) : null}
          {!userChatsLoading && userChatsData
            ? userChatsData?.payload?.chats.map((elm) => {
                return (
                  <div key={elm._id} className="single-my-disc chat-bull">
                    <BsChatRightDots />
                    <Link href={`disc/${elm?.slug}`}>
                      <p>
                        {decodeURIComponent(elm?.slug)
                          .replaceAll("-", " ")
                          .substr(0, 23)}
                        {elm?.slug.length >= 23 && "..."}
                      </p>
                    </Link>
                  </div>
                );
              })
            : null}
          {!userChatsLoading &&
            userChatsData &&
            userChatsData?.payload?.chats.length === 0 && (
              <div className="single-my-disc chat-bull">
                <p>Nothing yet</p>
              </div>
            )}

          {user && userChatsData?.payload?.count > 3 && (
            <Link className="button-like" href={`/chats/${user.uid}`}>
              <button>Load more</button>
            </Link>
          )}
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
