import Image from "next/image";
import React from "react";

const ProfileCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="" alt="" fill className="rounded-md object-cover" />
                <Image
                    src=""
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10"
                />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Edward Gabriel</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image
                            src=""
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full object-cover w-3 h-3"
                        />
                    </div>
                    <span className="text-xs text-gray-500">500 Followers</span>
                </div>
                <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
                    My Pfoile
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
