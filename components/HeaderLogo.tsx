import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.svg";

const HeaderLogo: React.FC = () => {
  return (
    <div className="z-10">
      <Link href="/">
        <Image
          className="h-[40px] w-[40px]"
          src={Logo}
          alt="logo image"
          width={1000}
          height={1000}
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
