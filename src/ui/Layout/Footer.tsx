import React, { memo } from "react";

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={`bg-gray-200 py-4 ${className}`}>
      <div className="container mx-auto text-center xl:max-w-[1280px]">
        <p className="text-gray-600">This is the footer content.</p>
        <p className="text-gray-600">Example content goes here.</p>
        <p className="text-gray-600">
          <a href="#">About Us</a> |<a href="#">Campaign</a> |
          <a href="#">Terms and Conditions</a> | Want to post a job? Contact us
          via email.
        </p>
        <p className="text-gray-600">
          <a href="#">About Us</a> |<a href="#">Campaign</a> |
          <a href="#">Terms and Conditions</a> | Want to post a job? Contact us
          via email.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
