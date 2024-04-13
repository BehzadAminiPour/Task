"use client";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGetOTP = () => {
    if (phoneNumber.trim() !== "") {
      console.log("OTP will be generated for:", phoneNumber);
    } else {
      console.log("Phone number cannot be empty");
    }
  };

  return (
    <>
      <h1 className="text-center my-5">Login</h1>
      <div className="flex justify-center items-center">
        <label>Phone number : </label>
        <input
          required
          type="number"
          className="bg-slate-300 p-1 ms-1"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <p className="text-center my-5">
        <Link href="/otp">
          <button
            onClick={handleGetOTP}
            disabled={phoneNumber.trim() === ""}
            className={`bg-green-400 p-1 rounded-md ${
              phoneNumber.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Get OTP
          </button>
        </Link>
      </p>
      <p className="text-center my-10">
        <Link href="/" className="text-purple-500">
          Back home
        </Link>
      </p>
    </>
  );
};

export default Login;
