// import { useState } from "react";
import "./RegisterForn.scss";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const RegisterForn = () => {
  // const [color, setColor] = useState("black");
  // setColor("black");
  return (
    <div className="RegisterForn">
      <div className="">
        <img className="w-10 logo" src={Logo} alt="" />
        <h2
          className="text-2xl font-bold mt-10"
          style={{ letterSpacing: "1.5px" }}
        >
          Create an Account
        </h2>
      </div>
      <div className="my-5">
        <form>
          <div className="my-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Full Name <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className={`p-3 my-3 w-full outline-none border border-b border-[black] rounded-md text-sm`}
                placeholder="Eg: Anas Yakubu"
              />
            </div>
            {/*  */}
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Username <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className="p-3 my-3 w-full outline-none border border-b border-black rounded-md text-sm"
                placeholder="Eg: example01"
              />
            </div>
          </div>

          {/*  */}
          <div className="my-2 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Email <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className={`p-3 my-3 w-full outline-none border border-b border-[black] rounded-md text-sm`}
                placeholder="Eg: yakubuanas04@gmail.com"
              />
            </div>
            {/*  */}
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Phone <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className="p-3 my-3 w-full outline-none border border-b border-black rounded-md text-sm"
                placeholder="Eg: +2349090999937"
              />
            </div>
          </div>
          {/*  */}
          <div className="my-2 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Password <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className={`p-3 my-3 w-full outline-none border border-b border-[black] rounded-md text-sm`}
                placeholder="Anas Yakubu"
              />
            </div>
            {/*  */}
            <div className="">
              <label
                htmlFor=""
                className="text-sm font-thin"
                style={{ letterSpacing: "0.5px" }}
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                className="p-3 my-3 w-full outline-none border border-b border-black rounded-md text-sm"
                placeholder="Eg: example01"
              />
            </div>
          </div>

          <div className="my-2">
            <button className="p-3 w-[25%] rounded-lg text-sm bg-gray-900 text-white font-light">
              Register
            </button>
          </div>
          <hr className="mt-8 bg-blue-100 w-full" />
          <div className="my-4">
            <div className="flex justify-center">
              <button
                type="button"
                className="lw-full flex gap-3 p-3 m-3 text-xl bg-white border-2 outline-none border-gray-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("Coming Soon... Try Using Email and Password");
                }}
              >
                <FcGoogle />
                <span className="text-sm btn-text">Continue With Google</span>
              </button>
              <button
                type="button"
                className="lw-full  flex gap-3 p-3 m-3 text-xl bg-white border-2  outline-none  border-gray-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("Coming Soon... Try Using Email and Password");
                }}
              >
                <FaGithub />
                <span className="text-sm btn-text">Continue With Github</span>
              </button>
            </div>
            <div className="mt-3 flex justify-center text-center">
              <p className="text-sm register">
                Already have an account?{" "}
                <Link className="underline font-extrabold" to="/Login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForn;
