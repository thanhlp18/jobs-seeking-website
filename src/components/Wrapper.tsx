import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return (
    <div className={`xl:max-w-[1280px]  pt-6 px-4 mx-auto w-full ${className}`}>
      {children}
    </div>
  );
}
