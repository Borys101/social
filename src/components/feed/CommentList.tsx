"use client";

import { addComment } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type CommentsWithUser = Comment & { user: User };

const CommentList = ({
    comments,
    postId,
}: {
    comments: CommentsWithUser[];
    postId: number;
}) => {
    const { user } = useUser();
    const [commentState, setCommentState] = useState(comments);
    const [desc, setDesc] = useState("");

    const add = async () => {
        if (!user || !desc) return;

        addOptimisticComment({
            id: Math.random(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            postId,
            userId: user.id,
            user: {
                id: user.id,
                username: "Sending Please Wait...",
                avatar: user.imageUrl || "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAt: new Date(Date.now()),
            },
        });
        try {
            const createdComment = await addComment(postId, desc);
            setCommentState((prev) => [createdComment, ...prev]);
        } catch (error) {}
    };

    const [optimisticComments, addOptimisticComment] = useOptimistic(
        commentState,
        (state, value: CommentsWithUser) => [value, ...state]
    );
    return (
        <>
            {user && (
                <div className="flex items-center gap-4">
                    <Image
                        src={user.imageUrl || "/noAvatar.png"}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                        width={32}
                        height={32}
                    />
                    <form
                        action={add}
                        className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
                    >
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="bg-transparent outline-none flex-1"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <Image
                            src="/emoji.png"
                            alt="Emoji"
                            className="wcursor-pointer"
                            width={16}
                            height={16}
                        />
                    </form>
                </div>
            )}
            <div className="">
                {optimisticComments.map((comment) => (
                    <div
                        className="flex gap-4 justify-between mt-6"
                        key={comment.id}
                    >
                        <Image
                            className="cursor-pointer w-10 h-10"
                            src={comment.user.avatar || "/noAvatar.png"}
                            alt="Avatar"
                            height={40}
                            width={40}
                        />
                        <div className="flex flex-col gap-2 flex-1">
                            <span className="font-medium">
                                {comment.user.name && comment.user.surname
                                    ? `${comment.user.name} ${comment.user.surname}`
                                    : comment.user.username}
                            </span>
                            <p>{comment.desc}</p>
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
                                    <span className="text-gray-500">
                                        123 Likes
                                    </span>
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
                ))}
            </div>
        </>
    );
};

export default CommentList;
