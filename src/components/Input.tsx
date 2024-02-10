import React from "react";
import styled from "styled-components";
import { COLOR_PRIMARY } from "../utils/ColorConstants";

type Props = {
  placeholder?: string;
  type: string;
  name: string;
  required?: boolean | undefined;
  label?: string;
  id?: string;
  containerClassName?: string;
  handleOnChange?: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  padding: 0.75rem;
  outline: none;
  border-radius: 0.375rem;
  border: none;
  color: #000;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  font-size: 0.875rem;
  line-height: 1.5rem;
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
  font-size: 0.875rem;
  line-height: 1.5rem;
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
}) => {
  return label ? (
    <div className={`flex flex-col ${containerClassName}`}>
      <label htmlFor={id} className=" mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <StyledInput
        id={id}
        type={type ? type : "text"}
        required={required ? required : false}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  ) : (
    <StyledInput
      id={id}
      type={type ? type : "text"}
      required={required ? required : false}
      name={name}
      className={containerClassName}
      onChange={handleOnChange}
    />
  );
};

export default Input;
