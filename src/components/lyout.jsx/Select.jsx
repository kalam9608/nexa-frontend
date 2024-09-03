import React, { useId } from "react";

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="inline-block mb-1 pl-1 text-gray-800">{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={` border text-gray-900 text-sm rounded-md outline-none   block w-full p-2.5 dark:bg-blue-100   dark:text-black  ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
