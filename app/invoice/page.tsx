import Image from "next/image";
import React from "react";
import logo from "@/assets/images/10.svg";

const InvoicePage = () => {
  return (
    <main className="grid place-items-center min-h-screen w-screen">
      <div className="h-[96%] w-[96%] border-t-8 border-blue-600">
        <div className="flex justify-between mt-20 border-b-2">
          <div>
            <Image
              src={logo}
              alt="Invoice"
              width={100}
              height={100}
              className="w-60 h-60"
            />
            <h1>Invoice 003</h1>
          </div>
          <div>
            <h1>INV1234567890</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvoicePage;
