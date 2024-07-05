import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} InvoiceMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
