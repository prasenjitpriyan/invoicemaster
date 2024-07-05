import React from "react";
import { IoIosCloudDownload } from "react-icons/io";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <aside className="w-screen md:h-screen md:w-64">
        <div className="h-full px-5 py-4 bg-zinc-200 dark:bg-zinc-500">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-zinc-900 rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group"
              >
                <IoIosCloudDownload className="w-5 h-5 text-zinc-500 transition duration-75 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                <span className="ms-3">Download</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="min-h-screen">
        <h1>Hello</h1>
      </aside>
    </section>
  );
};

export default Hero;
