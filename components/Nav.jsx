"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  return (
    <nav className=" flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          priority
          src="/public/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        {/* <img src={require("/public/images/logo.svg")} alt="ss" /> */}
      </Link>
    </nav>
  );
};

export default Nav;
