import React from "react";
import styled from "styled-components";
import { COLOR_PRIMARY } from "../utils/constants";

type Props = {
  placeholder?: string;
  type: "checkbox" | "no-style" | string;
  name: string;
  required?: boolean | undefined;
  label?: string;
  id?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  handleOnChange?: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
};

export const inputStyle = `
padding: 0.75rem;
border-radius: 0.375rem;
outline: none;
color: #000;
background-color: #fff;

`;

const NoStyleInput = styled.input``;

const PrimaryStyleInput = styled.input`
  ${inputStyle}
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  --tw-ring-inset: inset;
  --tw-placeholder-color: rgb(255, 255, 255);
  --tw-ring-color: #ccc;
  &:focus {
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-inset: inset;
    --tw-ring-color: ${COLOR_PRIMARY};
  }
`;

const Input: React.FC<Props> = ({
  placeholder,
  type,
  required,
  name,
  handleOnChange,
  label,
  id,
  containerClassName,
  inputClassName,
  labelClassName,
}) => {
  switch (type) {
    case "no-style":
      return (
        <NoStyleInput
          id={id}
          type={type ? type : "text"}
          required={required ? required : false}
          name={name}
          className={`${inputClassName} ${containerClassName}`}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      );
    default:
      return (
        <div className={`${containerClassName}`}>
          {label && (
            <label htmlFor={id} className={`${labelClassName}`}>
              {label} {required && <span className="text-red-600">*</span>}
            </label>
          )}
          <PrimaryStyleInput
            id={id}
            type={type ? type : "text"}
            required={required ? required : false}
            name={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            className={` ${inputClassName}`}
          />
        </div>
      );
  }
};

export default Input;
