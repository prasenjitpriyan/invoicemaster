"use client";

import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { RootState } from "@/lib/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <nav className="bg-gray-200 w-100 px-8 md:px-auto">
      <div className="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1 flex justify-center items-center">
          <FaFileInvoice className="h-5 w-5" />
          <h1 className="font-semibold text-xl">InvoiceMaster</h1>
        </div>
        <div className="order-2 md:order-3">
          <button
            className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-full flex items-center gap-2"
            onClick={() => dispatch(toggleTheme())}
          >
            {mode === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
