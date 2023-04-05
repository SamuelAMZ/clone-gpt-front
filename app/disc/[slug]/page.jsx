import React from "react";

// components
import RightSidebar from "@/app/components/SingleDisc/RightSidebar/RightSidebar";
import LeftSidebar from "@/app/components/SingleDisc/LeftSidebar/LeftSidebar";
import DiscFlow from "@/app/components/SingleDisc/DiscFlow/DiscFlow";

const page = ({ params }) => {
  return (
    <div className="single-disc-container">
      <LeftSidebar />
      <DiscFlow slug={params.slug} />
      {/* <RightSidebar /> */}
    </div>
  );
};

export default page;
