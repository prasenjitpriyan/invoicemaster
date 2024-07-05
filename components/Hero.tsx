import Link from "next/link";
import React from "react";
import { IoIosCloudDownload } from "react-icons/io";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row dark:bg-zinc-700">
      <aside className="w-screen md:h-screen md:w-64">
        <div className="h-full px-5 py-4">
          <button className="space-y-2 font-medium w-full">
            <Link
              href="/download"
              className="flex items-center p-2 text-zinc-800 rounded-lg dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-700 group"
            >
              <IoIosCloudDownload className="w-5 h-5 text-zinc-800 transition duration-75 dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
              <span className="ms-3">Download</span>
            </Link>
          </button>
        </div>
      </aside>
      <aside className="min-h-[100svh] w-full">
        <div className="m-5 bg-zinc-100 dark:bg-zinc-800 h-[calc(100svh_-_1.25rem)] rounded-xl p-5 border-2 border-dashed">
          <h1>Hello</h1>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
