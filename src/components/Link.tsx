import React from "react";
import { ReactChild } from "react";
import { NavLink } from "react-router-dom";

type Props = { children: ReactChild; to: string; className?: string };

export default function Link({ children, to, className }: Props) {
  return (
    <NavLink to={to} className={`text-blue-700 font-medium ${className}`}>
      {children}
    </NavLink>
  );
}
