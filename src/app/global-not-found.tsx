"use client";
import React from "react";
import "./globals.css";
import FuzzyText from "@/components/ui/fuzzy-text";
import Link from "next/link";

const Custom404 = () => {
  return (
    <html>
      <body className="bg-gray-200">
        <div className="flex items-center justify-center h-screen flex-col">
          <FuzzyText fontSize={200} color="black">
            404
          </FuzzyText>
          <p className="text-4xl mt-5">Page Not Found</p>
          <Link href="/" className="pt-5 pb-1 text-xl  hover:text-gray-500">
            Go Back to homepage
          </Link>
        </div>
      </body>
    </html>
  );
};

export default Custom404;
