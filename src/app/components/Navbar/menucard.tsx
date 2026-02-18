import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import md5 from "blueimp-md5"

export default function MenuCard({email }: {email: string}) {

  const hash = md5(email.trim().toLowerCase())
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`


  return (
    <DropdownMenu>
  <DropdownMenuTrigger className="p-1 mr-2 text-gray-700 rounded-full hover:bg-gray-300 focus-visible:ring-0">
    <Image src={gravatarUrl} alt="profile" width={40} height={40} className="rounded-full object-cover"/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="p-2 m-1">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  );
}