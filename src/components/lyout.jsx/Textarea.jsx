import React, { useId } from "react";

const Textarea = React.forwardRef(function Input(
  { label, type, className = "", errorMessage, isError, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 text-gray-800" htmlFor={id}>
          {label}
        </label>
      )}

      <textarea 
        type={type}
        id={id}
        className={` border text-gray-900 text-sm rounded-md outline-none   block w-full p-2.5 dark:bg-blue-100   dark:text-black  ${className}`}
        ref={ref}
        {...props}
      />
      {isError && (
        <p className="text-xs mt-1 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
});

export default Textarea
