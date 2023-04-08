import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

const style = {
  padding: 10,
  margin: 5,
  width: 20,
  fontSize: 20,
  borderRadius: 5,
};

const InputBox = ({ length, maxLength, OTP, setPinVal }) => {
  const [value] = useState(new Array(length).fill(""));
  console.log(value);

  const inputRef = useRef([]);
  console.log(inputRef.current);

  const onChangeHandler = (e, index) => {
    if (index < length - 1 && e.target.value.length > 0) {
      inputRef.current[index + 1].focus();
    }
    const data = (value[index] = e.target.value);
    setPinVal(value.join(""));
  };

  const backSpaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    const data = (value[index] = e.target.value);
    setPinVal(value.join(""));
  };

  const handlePaste = (e, index) => {
    const pastedData = e.clipboardData
      .getData("text")
      .split(" ")
      .filter((item, index) => index < length);
    setPinVal(pastedData);
  };

  return (
    <div onPaste={handlePaste}>
      <h1>{OTP}</h1>
      {value.map((el, index) => {
        return (
          <PinItem
            key={index}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            maxLength={maxLength}
            style={style}
            onChange={(e) => onChangeHandler(e, index)}
            backSpaceHandler={(e) => backSpaceHandler(e, index)}
            handlePaste={(e) => handlePaste(e, index)}
          />
        );
      })}
    </div>
  );
};

InputBox.propTypes = {
  length: PropTypes.number.isRequired,
};

export default InputBox;
