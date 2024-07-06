import Image from "next/image";
import React from "react";

interface HeaderAvatarProps {
  url: string;
}

const HeaderAvatar: React.FC<HeaderAvatarProps> = ({ url }) => {
  return (
    <div className="h-full flex items-center justify-center border-l-[1px_solid_#494e6e] min-w-[79px] md:min-w-[87px] xl:border-l-[none] xl:border-t-[1px_solid_#494e6e]">
      <Image
        src={url}
        className="max-w-[32px] max-h-[32px] rounded-[50%] md:max-w-[40px] md:max-h-[40px]"
        alt="avatar image"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default HeaderAvatar;
