import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { inputStyle } from "./Input";

type props = {
  containerClassName?: string;
  name?: string;
  icon?: React.ReactNode;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const StyledSelect = styled.select<{ $isIcon?: boolean }>`
  ${inputStyle}
  appearance: none;
  padding-right: 3rem;
  ${(props) => props.$isIcon && `padding-left: 2.5rem;`}
`;

export default function Dropdown({
  containerClassName,
  name,
  icon,
  options,
  onChange,
}: props) {
  return (
    <div className={`${containerClassName} relative w-fit overflow-hidden`}>
      {icon && (
        <span className="pointer-events-none absolute left-4 top-2 pt-0.5 text-lg font-bold text-gray-400 z-10">
          {icon}
        </span>
      )}
      <StyledSelect
        id={name}
        name={name}
        className="w-full"
        $isIcon={!!icon}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </StyledSelect>
      <span className="pointer-events-none absolute right-5 top-3 text-sm font-bold text-gray-400">
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
}
