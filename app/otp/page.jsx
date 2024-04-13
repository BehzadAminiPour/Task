"use client";
import Link from "next/link";
import { useState } from "react";

const OTP = () => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSend = () => {
    if (verificationCode.trim() !== "") {
      console.log("Sending verification code:", verificationCode);
    } else {
      console.log("Verification code cannot be empty");
    }
  };

  return (
    <>
      <h1 className="text-center my-5">Verification code</h1>
      <div className="flex justify-center items-center">
        <label>Enter code : </label>
        <input
          type="number"
          className="bg-slate-300 p-1 ms-1"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
        />
      </div>
      <p className="text-center my-5">
        <Link href="/location">
          <button
            onClick={handleSend}
            disabled={verificationCode.trim() === ""}
            className={`bg-green-400 p-1 rounded-md ${
              verificationCode.trim() === ""
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Send
          </button>
        </Link>
      </p>
      <p className="text-center my-10">
        <Link href="/login" className="text-purple-500">
          Back
        </Link>
      </p>
    </>
  );
};

export default OTP;
