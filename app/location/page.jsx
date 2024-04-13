"use client";
import Link from "next/link";
import { useState } from "react";

const Location = () => {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    if (city.trim() === "" || address.trim() === "") {
      console.log("City and address cannot be empty");
    } else {
      console.log("Submitting location - City:", city, "Address:", address);
    }
  };

  return (
    <>
      <h1 className="text-center my-5">Your Location</h1>
      <div className="flex justify-center items-center my-2">
        <label>Your city : </label>
        <input
          type="text"
          className="bg-slate-300 p-1 ms-1"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="flex justify-center items-center my-2">
        <label>Your address : </label>
        <input
          type="text"
          className="bg-slate-300 p-1 ms-1"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <p className="text-center my-5">
        <Link href="/">
          <button
            onClick={handleSubmit}
            disabled={city.trim() === "" || address.trim() === ""}
            className={`bg-green-400 p-1 rounded-md ${
              city.trim() === "" || address.trim() === ""
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Submit
          </button>
        </Link>
      </p>
      <p className="text-center my-10">
        <Link href="/otp" className="text-purple-500">
          Back
        </Link>
      </p>
    </>
  );
};

export default Location;
