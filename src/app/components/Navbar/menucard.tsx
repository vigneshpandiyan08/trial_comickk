"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import md5 from "blueimp-md5";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";

export default function MenuCard() {
  const { user, logout } = useAuth();

  // For guests, use a default email for gravatar
  const email = user?.email || "guest@example.com";
  const hash = md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 text-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 focus-visible:ring-0 transition">
        <Image
          src={gravatarUrl}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2 m-1 min-w-[150px]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {user ? (
          <>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href="/signin" className="w-full block">
                Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup" className="w-full block">
                Sign Up
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
