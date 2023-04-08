import React, { forwardRef } from "react";

const PinItem = forwardRef(
  ({ maxLength, style, onChange, backSpaceHandler }, ref) => {
    const handleInput = (e) => {
      if (e.keyCode == 8) {
        backSpaceHandler(e);
      } else {
        onChange(e);
      }
    };
    return (
      <input
        maxLength={maxLength}
        onKeyUp={handleInput}
        style={style}
        ref={ref}
      />
    );
  }
);

export default PinItem;
