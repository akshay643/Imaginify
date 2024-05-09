"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/">
        <Image
          src="assets/images/logo-text.svg"
          width={140}
          height={80}
          alt="logo"
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="assets/icons/menu.svg"
                alt="menu"
                height={30}
                width={30}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  <nav className="header-nav">
                    <SignedIn>
                      <ul className="header-nav_elements">
                        {navLinks?.slice(0, 6).map((link, index) => {
                          const isActive = link.route == pathname;

                          return (
                            <li
                              key={link.route}
                              className={`p-18 flex whitespace-nowrap ${
                                isActive ? " text-gray-900" : "text-gray-600"
                              }`}
                            >
                              <Link className="sidebar-link" href={link.route}>
                                <Image
                                  src={link.icon}
                                  alt="logo"
                                  height={24}
                                  width={24}
                                  className={`${
                                    link.route == pathname && "brightness-200"
                                  }`}
                                />
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <ul className="header-nav_elements">
                        {navLinks?.slice(6).map((link, index) => {
                          const isActive = link.route === pathname;
                          return (
                            <li
                              key={link.route}
                              className={`p-18 flex whitespace-nowrap text-dark-700 ${
                                isActive
                                  ? "bg-purpe-gradiet text-white"
                                  : "text-gray-700"
                              }`}
                            >
                              <Link
                                className="sidebar-link cursor-pointer"
                                href={link.route}
                              >
                                <Image
                                  src={link.icon}
                                  alt="logo"
                                  height={24}
                                  width={24}
                                  className={`${isActive && "brightness-200"}`}
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
                  <nav className="header-nav">
                    <SignedOut>
                      <Button>
                        <Link href="/sign-in">Login</Link>
                      </Button>
                    </SignedOut>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default Mobilenav;
