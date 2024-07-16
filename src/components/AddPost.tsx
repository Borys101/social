import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const AddPost = () => {
    const { userId } = auth();

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            <Image
                src=""
                alt=""
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
            />
            <div className="flex-1">
                <form action="" className="flex gap-4">
                    <textarea
                        placeholder="What's on your mind?"
                        className="flex-1 bg-slate-100 rounded-lg p-2"
                        name="desc"
                    ></textarea>
                    <Image
                        src="/emoji.png"
                        alt="Emoji"
                        className="h-5 w-5 cursor-pointer self-end"
                        width={20}
                        height={20}
                    />
                    <button>Send</button>
                </form>
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addImage.png"
                            alt="AddPhoto"
                            width={20}
                            height={20}
                        />
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addVideo.png"
                            alt="AddVideo"
                            width={20}
                            height={20}
                        />
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/poll.png"
                            alt="Poll"
                            width={20}
                            height={20}
                        />
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/addEvent.png"
                            alt="AddEvent"
                            width={20}
                            height={20}
                        />
                        Event
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
