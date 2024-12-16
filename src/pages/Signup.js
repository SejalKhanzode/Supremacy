import React, { useState } from "react";
import logo from "../assets/Logo/Logo-Full-Dark.png";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../slices/authSlice";
import { toast } from "react-hot-toast";
import { signUp } from "../services/operations/authAPI";
import { ACCOUNT_TYPE, accountType } from "../utils/userRole";
import Tab from "../components/common/Tab";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const signupData = {
      ...formData,
      accountType,
    };

    console.log("signupData>>", signupData);

    dispatch(setSignupData(signupData));
    dispatch(signUp(firstName, lastName, email, password, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setAccountType(accountType.STUDENT);
  };


  return (
    <div>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center justify-center w-11/12 max-w-maxContent gap-6">
          <div className="m-6">
            <Link to="/">
              <img src={logo} width={160} height={42} loading="lazy" />
            </Link>
          </div>

          <form onSubmit={handleOnSubmit}>
            <div>
              <h1 className="font-bold text-2xl text-center">
                Signup as candidate
              </h1>

              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={handleOnChange}
                    className="rounded-md p-2 bg-[#F2F3F8] w-[240px] mt-5 mr-3"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={handleOnChange}
                    className="rounded-md p-2 bg-[#F2F3F8] w-[240px] mt-5"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleOnChange}
                  className="rounded-md p-2 bg-[#F2F3F8] w-[500px] mt-5"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleOnChange}
                  className="rounded-md p-2 bg-[#F2F3F8] w-[500px] mt-5"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group mt-8 p-1 bg-black font-bold text-white transition-all duration-200 hover:scale-95 w-fit"
              >
                <div className="rounded-md flex flex-row items-center justify-center gap-2 px-10 py-[5px] transition-all duration-200">
                  <p>Create an Account</p>
                  <HiOutlineArrowRight />
                </div>
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center">
            <p>Already have an account?</p>
            <Link to={"/login"} className="text-green-600 font-bold">
              Login into your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
