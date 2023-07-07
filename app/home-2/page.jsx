"use client";

import React from 'react';

import WhyKalami from "../components/home-2/WhyKalami";
import HowWhereWorks from "../components/home-2/HowWhereWorks";
import Reviews from "../components/home-2/Reviews";
import Faq from "../components/home-2/Faq";
import InstallExtension from "../components/home-2/InstallExtension";

const page = () => {
  return (
    <>
      <WhyKalami/>
      <HowWhereWorks/>
      <Reviews/>
      <Faq/>
      <InstallExtension/>
    </>
  )
}

export default page;