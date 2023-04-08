import React, { useState } from "react";
import InputBox from "./InputBox";

const OtpBoxes = () => {
  const [pinVal, setPinVal] = useState();

  return (
    <div>
      <InputBox
        length={5}
        maxLength={1}
        OTP={"Enter Otp Here"}
        setPinVal={setPinVal}
      />
      <h1>Your OTP -.-</h1>
      <h2>{pinVal}</h2>
    </div>
  );
};

export default OtpBoxes;
