import React, { useState } from "react";
import ViewRecipeBtn from "./ViewRecipeBtn";

const Form = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setContactData({
      username: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="px-4">
        <h1 className="font-bold text-2xl mb-4">contact us form</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="border px-4 py-2 w-full rounded-lg text-lg outline-none"
              onChange={handleChange}
              value={contactData.username}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border px-4 py-2 w-full rounded-lg text-lg outline-none"
              onChange={handleChange}
              value={contactData.email}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              className="border px-4 py-2 w-full rounded-lg text-lg outline-none"
              onChange={handleChange}
              value={contactData.message}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              className="border px-4 py-2 w-full rounded-lg text-lg outline-none"
              onChange={handleChange}
              value={contactData.phone}
            />
          </div>

          <button className="bg-blue-500 w-full py-2 text-white rounded-lg ">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
