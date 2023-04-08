import React, { useState } from "react";
import InputBox2 from "./InputBox2";

const OtpBoxes2 = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <InputBox2
        label={"Practice Otp Box"}
        length={5}
        maxLength={1}
        setOtp={setOtp}
      />
      <h1>Your OTP is -.-</h1>
      <h2>{otp}</h2>
    </>
  );
};
export default OtpBoxes2;
