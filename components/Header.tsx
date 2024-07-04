import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1 flex justify-center items-center">
          <FaFileInvoice className="h-10 w-10" />
          <h1 className="font-semibold text-3xl">InvoiceMaster</h1>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-full flex items-center gap-2">
            <FaSun />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
