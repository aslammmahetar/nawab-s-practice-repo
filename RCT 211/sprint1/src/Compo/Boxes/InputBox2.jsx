import React, { useRef } from "react";
import PinInp2 from "./PinInp2";

const InputBox2 = ({ label, length, maxLength, setOtp }) => {
  const value = useRef(new Array(length).fill(""));
  console.log(value.current);
  const inpVal = useRef([]);
  console.log(inpVal);
  //   console.log(inpVal.current);
  const style = {
    padding: 15,
    margin: 5,
    width: 20,
    borderRadius: 5,
    fontSize: 20,
  };

  //
  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inpVal.current[index - 1].focus();
    }
    value.current[index] = e.target.value;
    setOtp(value.current.join(""));
  };

  //
  const handleChange = (e, index) => {
    if (index < length - 1 && e.target.value.length > 0) {
      inpVal.current[index + 1].focus();
    }
    value.current[index] = e.target.value;
    setOtp(value.current.join(""));
  };

  //
  const handleInput = (e, index) => {
    if (e.keyCode == 8) {
      handleBackSpace(e, index);
    } else {
      handleChange(e, index);
    }
  };

  return (
    <div>
      <h1>{label}</h1>
      {value.current.map((el, index) => {
        return (
          <PinInp2
            ref={(element) => {
              inpVal.current[index] = element;
            }}
            key={index}
            style={style}
            maxLength={maxLength}
            handleChange={(e) => handleChange(e, index)}
            handleBackSpace={(e) => handleBackSpace(e, index)}
            handleInput={(e) => handleInput(e, index)}
          />
        );
      })}
    </div>
  );
};

export default InputBox2;
