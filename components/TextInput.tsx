import React, { ReactNode } from "react";

interface TextInputProps {
  htmlFor: string;
  labelText: string;
  type: string;
  placeholder: string;
  className: string;
}

const TextInput: React.FC<TextInputProps> = ({
  htmlFor,
  labelText,
  type,
  placeholder,
  className,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-50"
      >
        {labelText}
      </label>
      <input
        type={type}
        id={htmlFor}
        className={`bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-50 dark:focus:ring-zinc-500 dark:focus:border-zinc-500 ${className}`}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextInput;
