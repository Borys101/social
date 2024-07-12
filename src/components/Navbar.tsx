import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-24">
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-600">
                    SOCIAL
                </Link>
            </div>
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex gap-2 items-center">
                        <Image
                            src="/home.png"
                            width={16}
                            height={16}
                            alt="Homepage"
                            className="w-4 h-4"
                        />{" "}
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image
                            src="/friends.png"
                            width={16}
                            height={16}
                            alt="Friends"
                            className="w-4 h-4"
                        />{" "}
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image
                            src="/stories.png"
                            width={16}
                            height={16}
                            alt="Stories"
                            className="w-4 h-4"
                        />{" "}
                        <span>Stories</span>
                    </Link>
                </div>
                <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none"
                    />
                    <Image
                        src="/search.png"
                        alt="Search"
                        width={14}
                        height={14}
                    />
                </div>
            </div>
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate=[spin_1.5s_linear_infinite] dark:text-white"></div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image
                                src="/people/png"
                                alt="People"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <Image
                                src="/messages.png"
                                alt="Messages"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <Image
                                src="/notifications.png"
                                alt="Notifications"
                                width={20}
                                height={20}
                            />
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm">
                            <Image
                                src="/login.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Link href="/sign-in">Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    );
};

export default Navbar;
