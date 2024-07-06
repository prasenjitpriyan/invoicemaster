import React from "react";
import MoonIcon from "@/assets/icon-moon.svg";
import SunIcon from "@/assets/icon-sun.svg";
import { useTheme } from "@/lib/features/Theme/useTheme";
import Image from "next/image";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme();
  };
  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "dark" ? (
        <Image
          width={100}
          height={100}
          src={MoonIcon}
          alt="switcher moon icon"
        />
      ) : (
        <Image width={100} height={100} src={SunIcon} alt="switcher sun icon" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
