import React, { useState } from "react";
import logo from "../assets/Logo/Logo-Full-Dark.png";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { login } from "../services/operations/authAPI";

function Login () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center justify-center w-11/12 max-w-maxContent gap-6">
        <div className="m-6">
          <Link to="/">
            <img src={logo} width={160} height={42} loading="lazy" />
          </Link>
        </div>

        <form onSubmit={handleOnSubmit}>
          <h1 className="font-bold text-2xl text-center">Login as candidate</h1>

          <div className="flex flex-col">
          <input
            type="text"
            onChange={handleOnChange}
            name="email"
            value={email}
            placeholder="Email"
            className="rounded-md p-2 bg-[#F2F3F8] w-[500px] mt-5"
          />
          <input
            type="password"
            onChange={handleOnChange}
            name="password"
            value={password}
            placeholder="Password"
            className="rounded-md p-2 bg-[#F2F3F8] w-[500px] mt-5"
          />
          </div>

          <div>
            {/* <Link to={""}>
            <div className="group mt-8 p-1 mx-auto bg-black font-bold text-white transition-all duration-200 hover:scale-95 w-fit">
              <div className="rounded-md flex flex-row items-center justify-center gap-2 px-10 py-[5px] transition-all duration-200">
                <p>Login with Email</p>
                <HiOutlineArrowRight />
              </div>
            </div>
          </Link> */}

            <div className="flex justify-center">
              <button
                type="submit"
                className="group mt-8 p-1 bg-black font-bold text-white transition-all duration-200 hover:scale-95 w-fit"
              >
                <div className="rounded-md flex flex-row items-center justify-center gap-2 px-10 py-[5px] transition-all duration-200">
                  <p>Login with Email</p>
                  <HiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center">
          <p>No account? Join now!</p>
          <Link to={"/signup"} className="text-green-600 font-bold">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
