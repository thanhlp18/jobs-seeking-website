import React from "react";

type Props = {
  placeholder: string;
  type: string;
  name: string;
  required: boolean | undefined;
  label?: string;
  id?: string;
  containerClassName?: string;
  handleOnChange?: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
};

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
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id}>
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type ? type : "text"}
        required={required ? required : false}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-1"
      />
    </div>
  );
};

export default Input;
