"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// helpers
import postReq from "../../../helpers/postReq";
import notif from "../../../helpers/notif";

// react query
import { useQuery } from "react-query";

// import loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import gpt css
import "../../../disc/[id]/_gpt_styles.css";

const DiscFlow = ({ id }) => {
  const [duplicateText, setDuplicateText] = useState("");
  const [extensionPresent, setExtensionPresent] = useState(false);
  const page = "0";
  const perPage = "1000000";

  const router = useRouter();

  // get table data
  const handleLoadingShare = async () => {
    // send req
    return await postReq(
      {
        id: id,
        page: page,
        perPage: perPage,
      },
      "/api/single-share"
    );
  };

  const {
    data: shareData,
    isLoading: shareLoading,
    refetch: getShare,
  } = useQuery([id + "share"], handleLoadingShare, {
    refetchOnWindowFocus: false,
    enabled: true,
  });

  // loader
  const DiscLoadingScreen = () => {
    return (
      <div className="clone-loading-screen md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
        <Skeleton height={50} width={50} count={1} circle={true} />
        <Skeleton height={40} count={2} />
      </div>
    );
  };

  // remove default gpt stuffs
  useEffect(() => {
    Array.from(
      document.querySelectorAll(".chat-gpt-elmts-container img")
    ).forEach((item) => {
      item.remove();
    });

    // let url = "";

    // Array.from(
    //   document.querySelectorAll(".chat-gpt-elmts-container img")
    // ).forEach((item) => {
    //   item.srcset = "";
    //   url = item.src =
    //     "https://chat.openai.com" +
    //     item.src.replace("https://iprompt.co", "");
    // });

    // const image = `<img src='${url}' />`;

    const image = `<svg class='iprompt-user' width={20} height={20}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/></svg>`;

    Array.from(
      document.querySelectorAll(
        ".chat-gpt-elmts-container .relative.flex.items-end span span"
      )
    ).forEach((item) => {
      item.insertAdjacentHTML("beforeend", image);
    });
  }, [shareData]);

  // overwriting the css dark mode of gpt tailwind
  useEffect(() => {
    localStorage.theme = "dark";
  }, []);

  // seting duplicate text
  useEffect(() => {
    if (shareData) {
      const allItem = [];

      shareData?.payload?.shares?.forEach((item) => {
        allItem.push(item.textFormat);
      });

      setDuplicateText(allItem);
    }
  }, [shareData]);

  //  handle check if extension in installe dor not
  const handleCheckOfExt = (from) => {
    const extensionNotifier = document.querySelector(
      ".clonegpt-extension-present"
    );
    if (!extensionNotifier) {
      if (from === "checkBtn") {
        notif("CloneGPT chrome extension not installed");
      }
      return setExtensionPresent(false);
    }

    return setExtensionPresent(true);
  };
  useEffect(() => {
    handleCheckOfExt("not");
  }, [shareData]);

  // handle disc histories
  // get actual title
  const getTitle = () => {
    const firstBox = document
      .querySelector(".chat-gpt-elmts-container")
      .innerText.trim()
      .replaceAll("\n", "")
      .slice(0, 25);

    return firstBox.length > 0 ? firstBox : false;
  };

  const setHistories = () => {
    let actualHistory = localStorage.getItem("clone-history");
    let actualHistoryArr = actualHistory ? JSON.parse(actualHistory) : [];

    // remove the 10th item everytime
    if (actualHistoryArr?.length >= 10) {
      for (let i = 0; i < actualHistoryArr.length - 9; i++) {
        actualHistoryArr.shift();
      }
    }

    if (getTitle()) {
      actualHistoryArr.push(getTitle());
      localStorage.setItem("clone-history", JSON.stringify(actualHistoryArr));
    }
  };

  useEffect(() => {
    if (shareData) {
      setHistories();
    }
  }, [shareData]);

  return (
    <div className="ipromt-disc-flow">
      <div class="react-scroll-to-bottom--css-vlmjf-1n7m0yu">
        <div class="flex flex-col items-center text-sm dark:bg-gray-800">
          <div className="chat-gpt-elmts-container">
            {shareData?.payload?.shares.map((item, idx) => {
              return (
                <div
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: item.htmlFornat }}
                />
              );
            })}

            {shareLoading && (
              <SkeletonTheme baseColor="#8b8b8b35" highlightColor="#f9fafb">
                {DiscLoadingScreen()}
              </SkeletonTheme>
            )}
          </div>

          <div className="iprompt-disc-controlers">
            <div className="control-item">
              <div className="actual-control">
                <p className="title-item">
                  Duplicate this chat to your ChatGPT account
                </p>
                <p className="desc">
                  Replicate this conversation and its corresponding context in
                  your own ChatGPT account to allow you to utilize the actual
                  context of the conversation.
                </p>
                {extensionPresent ? (
                  <a
                    href={`https://chat.openai.com/chat?new-dup&${id}`}
                    target="_blank"
                  >
                    <button
                      className="btn btn-primary w-full"
                      id="start-duplication"
                    >
                      Duplicate
                    </button>
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleCheckOfExt("checkBtn")}
                  >
                    Duplicate
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscFlow;
