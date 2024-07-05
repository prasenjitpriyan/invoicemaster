import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-200 dark:bg-zinc-500 text-zinc-500 dark:text-zinc-200 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} InvoiceMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
