import Image from "next/image";
import React from "react";

const Comments = () => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <Image
                    src=""
                    alt=""
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="bg-transparent outline-none flex-1"
                    />
                    <Image
                        src="/emoji.png"
                        alt="Emoji"
                        className="wcursor-pointer"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
            <div className="">
                <div className="flex gap-4 justify-between mt-6">
                    <Image
                        className="cursor-pointer w-10 h-10"
                        src=""
                        alt=""
                        height={40}
                        width={40}
                    />
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">UserName</span>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Optio nisi nemo officiis sint consequatur
                            voluptates sequi, numquam deleniti asperiores
                            voluptas tenetur soluta rem incidunt fugiat dolores
                            fugit voluptatum, alias earum?
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image
                                    className="cursor-pointer w-4 h-4"
                                    src="/like.png"
                                    alt="Like"
                                    height={12}
                                    width={12}
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    <Image
                        className="cursor-pointer w-4 h-4"
                        src="/more.png"
                        alt=""
                        height={16}
                        width={16}
                    />
                </div>
            </div>
        </div>
    );
};

export default Comments;
