import styled from "styled-components";
import { COLOR_PRIMARY } from "../utils/ColorConstants";
import { ReactNode } from "react";
import React from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  buttonType?: "outline" | "disabled" | "primary";
  type?: "button" | "submit" | "reset" | undefined;
};
const Button = styled.button`
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.625rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-in-out;
  /* transition: color 0.2s ease-in-out; */
`;

const PrimaryButton = styled(Button)`
  background-color: ${COLOR_PRIMARY};
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
  &:focus-visible {
    outline: 2px solid ${COLOR_PRIMARY};
    outline-offset: 2px;
  }
`;

const OutlineButton = styled(Button)`
  background-color: #fff;
  color: ${COLOR_PRIMARY};
  border: solid 1px ${COLOR_PRIMARY};
  &:hover {
    opacity: 0.8;
    background-color: ${COLOR_PRIMARY};
    color: #fff;
  }
  &:focus-visible {
    outline: 2px solid ${COLOR_PRIMARY};
    outline-offset: 2px;
    color: #fff;
  }
`;

const DisabledButton = styled(Button)`
  background-color: #fff;
  color: #c0c0c0;
  border: solid 1px #c0c0c0;
`;

export default function cButton({
  onClick,
  children,
  buttonType,
  type,
}: Props) {
  switch (buttonType) {
    case "outline":
      return (
        <OutlineButton onClick={onClick} type={type ? type : "submit"}>
          {children}
        </OutlineButton>
      );
    case "disabled":
      return (
        <DisabledButton
          onClick={onClick}
          type={type ? type : "submit"}
          disabled={true}
        >
          {children}
        </DisabledButton>
      );
    default:
      return (
        <PrimaryButton onClick={onClick} type={type ? type : "submit"}>
          {children}
        </PrimaryButton>
      );
  }
}
