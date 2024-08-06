import React from "react";

const Button = ({
  children,
  type = "submit",
  bgColor = "blue",
  textColor = "white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 outline-none hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
