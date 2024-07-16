"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React, { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
    sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests);

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await acceptFollowRequest(userId);
            setRequestState((prev) =>
                prev.filter((req) => req.id !== requestId)
            );
        } catch (error) {}
    };

    const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await declineFollowRequest(userId);
            setRequestState((prev) =>
                prev.filter((req) => req.id !== requestId)
            );
        } catch (error) {}
    };

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
        requestState,
        (state, value: number) => state.filter((req) => req.id !== value)
    );
    return (
        <div>
            {optimisticRequests.map((request) => (
                <div
                    className="flex items-center justify-between"
                    key={request.id}
                >
                    <div className="flex items-center gap-4">
                        <Image
                            src={request.sender.avatar || "/noAvatar.png"}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                            width={40}
                            height={40}
                        />
                        <span className="font-semibold">
                            {request.sender.name && request.sender.surname
                                ? `${request.sender.name} ${request.sender.surname}`
                                : request.sender.username}
                        </span>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <form
                            action={() => accept(request.id, request.senderId)}
                        >
                            <button>
                                <Image
                                    src="/accept.png"
                                    alt="Accept"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                                />
                            </button>
                        </form>
                        <form
                            action={() => decline(request.id, request.senderId)}
                        >
                            <Image
                                src="/reject.png"
                                alt="Accept"
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendRequestList;
