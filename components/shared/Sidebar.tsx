"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className=" h-full w-full flex-col gap-4 flex">
        <Link href="/">
          <Image
            src="assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={180}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks?.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_elements ${
                      isActive ? " text-gray-900" : "text-gray-500"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        height={24}
                        width={24}
                        // className={`${
                        //   link.route == pathname && "brightness-200"
                        // }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks?.slice(6).map((link, index) => {
                const isActive = link.route === pathname;
                console.log("isActive", isActive);

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_elements group ${
                      isActive ? "text-gray-900 " : "text-gray-500"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        height={24}
                        width={24}
                        // className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="gap-2 p-4 flex-center">
                <UserButton showName />
              </li>
            </ul>
          </SignedIn>
        </nav>
        <nav className="sidebar-nav">
          <SignedOut>
            <Button>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
