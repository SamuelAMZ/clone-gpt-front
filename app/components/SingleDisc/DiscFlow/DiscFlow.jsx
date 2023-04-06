"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// helpers
import postReq from "../../../helpers/postReq";
import notif from "../../../helpers/notif";

// react query
import { useQuery } from "react-query";

// import loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import gpt css
import "../../../disc/[slug]/_gpt_styles.css";

const DiscFlow = ({ slug }) => {
  const [duplicateText, setDuplicateText] = useState("");
  const page = "0";
  const perPage = "1000000";

  const router = useRouter();

  // get table data
  const handleLoadingShare = async () => {
    // send req
    return await postReq(
      {
        slug: slug,
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
  } = useQuery([slug + "share"], handleLoadingShare, {
    refetchOnWindowFocus: false,
    enabled: true,
  });

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
    //     item.src.replace("http://localhost:3000", "");
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

  // seting duplicate text
  useEffect(() => {
    console.log("lorem");
    if (shareData) {
      console.log(shareData.payload.shares);

      const allItem = [];

      shareData.payload.shares.forEach((item) => {
        allItem.push(item.textFormat);
      });

      setDuplicateText(allItem);
    }
  }, [shareData]);

  // handle redirect to dupliacte url
  const handleRedirectToDuplicateActionPage = () => {
    let dateToComp = "";
    const textToAdd = ["I asked you: ", "You said: "];
    const bottomText =
      "I want to ask more questions, do you undertand this context?";

    duplicateText.forEach((item, idx) => {
      dateToComp = `${dateToComp} ${textToAdd[idx % 2]} ${item}`;
    });

    console.log(`https://chat.openai.com/chat?${dateToComp + bottomText}`);

    router.push(`https://chat.openai.com/chat?${dateToComp + bottomText}`);
  };

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
                <button
                  className="btn btn-primary"
                  onClick={handleRedirectToDuplicateActionPage}
                >
                  Duplicate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscFlow;
