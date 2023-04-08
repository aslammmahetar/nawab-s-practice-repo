import React, { forwardRef } from "react";

const PinInp2 = forwardRef(({ style, maxLength, handleInput }, ref) => {
  return (
    <input
      ref={ref}
      style={style}
      maxLength={maxLength}
      onKeyUp={handleInput}
    />
  );
});

export default PinInp2;
