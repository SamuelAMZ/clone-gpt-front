"use client";

import React from "react";
import Link from "next/link";

const ExtensionDownloadButton = () => {
  return (
    <Link href="/auth">
      <button className="btn download-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10.1019 12.8634L10.1019 2.82922"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5322 10.4236L10.1022 12.8636L7.67223 10.4236"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.963 6.77332H14.7405C16.4364 6.77332 17.8105 8.14748 17.8105 9.84415V13.9141C17.8105 15.6058 16.4397 16.9766 14.748 16.9766H5.46471C3.76888 16.9766 2.39388 15.6016 2.39388 13.9058L2.39388 9.83498C2.39388 8.14415 3.76555 6.77332 5.45638 6.77332L6.24138 6.77332"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        &nbsp;Install Chrome extension
      </button>
    </Link>
  );
};

export default ExtensionDownloadButton;
