"use client";

import React from 'react';
import Link from "next/link";

const StartedFreeButton = () => {
  return (
    <Link href="/auth/register">
      <button className="btn started-free">Get started free</button>
    </Link>
  );
};

export default StartedFreeButton;
