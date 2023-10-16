import React from "react";

const Button = ({ onClick, disabled }) => {
  return (
    <div>
      <button
        className="disabled:bg-black bg-purple-500 px-4 py-2 rounded text-white"
        onClick={onClick}
        disabled={disabled}
      >
        Muat Ulang
      </button>
    </div>
  );
};

export default Button;
