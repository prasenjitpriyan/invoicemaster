import Link from "next/link";
import React from "react";
import { IoIosCloudDownload } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import TextInput from "./TextInput";
import DatePickerCoponents from "./DatePicker";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row dark:bg-zinc-700">
      <aside className="w-screen md:h-screen md:w-64">
        <div className="h-full px-5 py-4">
          <button className="space-y-2 font-medium w-full">
            <Link
              href="/invoice"
              className="flex items-center p-2 text-zinc-800 rounded-lg dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-700 group"
            >
              <IoIosCloudDownload className="w-5 h-5 text-zinc-800 transition duration-75 dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
              <span className="ms-3">Download</span>
            </Link>
          </button>
        </div>
      </aside>
      <aside className="min-h-[100svh] w-full">
        <div className="m-5 bg-zinc-100 dark:bg-zinc-800 h-[calc(100svh_-_1.25rem)] rounded-xl p-5">
          <div className="flex-col md:flex-row">
            {/* Para1 */}
            <div className="flex justify-between">
              <div className="flex">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center h-48 w-48 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:hover:bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCloudUploadAlt className="w-8 h-8 mb-4 text-zinc-500 dark:text-zinc-400" />
                    <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                      Add your logo
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <div className="flex flex-col justify-between h-48 w-48">
                <h1 className="font-bold text-[2.90rem]">INVOICE</h1>
                <TextInput
                  htmlFor="invoice"
                  labelText="Invoice number"
                  type="number"
                  placeholder="#"
                  className="w-full"
                />
              </div>
            </div>
            {/* Para2 */}
            <div className="flex flex-col lg:flex-row gap-5 mt-5">
              <div className="w-full flex flex-col gap-5">
                <TextInput
                  htmlFor="from"
                  labelText="Who is this from?"
                  type="text"
                  placeholder="Who is this from?"
                  className="w-full"
                />
                <TextInput
                  htmlFor="to"
                  labelText="Who is this to?"
                  type="text"
                  placeholder="Who is this to?"
                  className="w-full"
                />
              </div>
              <div className="lg:w-[30rem] flex flex-col justify-evenly gap-5">
                <div className="flex justify-end">
                  <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Date
                  </h1>
                  <DatePickerCoponents />
                </div>
                <div className="flex justify-end">
                  <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Due Date
                  </h1>
                  <DatePickerCoponents />
                </div>
                <div className="flex justify-end">
                  <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Next Bill Date
                  </h1>
                  <DatePickerCoponents />
                </div>
              </div>
            </div>
            {/* Para3 */}
            <div></div>
            {/* Para4 */}
            <div></div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
