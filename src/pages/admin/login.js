import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Head from 'next/head';
import Link from "next/link";
import Details from "../api/admin/Details";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRecord((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const main = new Details();
    const formData = new FormData();
    formData.append("email", record.email);
    formData.append("password", record.password);
    const response = main.login(formData);
    response
      .then((res) => {
        if (res && res?.data && res?.data?.status) {
          toast.success(res.data.message);
          localStorage && localStorage.setItem("token", res?.data?.token);
          router.push("/admin/banner");
          setLoading(false);
        } else {
          toast.error(res.data.message);
          setLoading(false);
        }
        setRecord({
          email: "",
          password: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        // console.log("error", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div
      className="h-screen tab-mob-height bg-cover"
      style={{ backgroundImage: `url(/Admin/Login-bg.JPG)` }}
    >
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-black-800">Sign In </h3>
                <p className="text-black-500">Please sign in to your account.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                    <input className="mt-1 p-4 border rounded-full w-full  w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email"
                      name="email"
                      value={record.email}
                      onChange={handleInputs}
                      id="email"
                      placeholder="your@email.com"
                      required />
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input className="mt-1 p-4 border rounded-full w-full w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password"
                      name="password"
                      value={record.password}
                      onChange={handleInputs}
                      id="password"
                      placeholder="Enter your password"
                      required />
                  </div>
                  <div className="flex items-center justify-between mb-5" >
                    <div className="text-sm">
                    </div> 
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center   bg-indigo-600  hover:bg-indigo-500 text-gray-100 p-3 mt-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    {loading ? "please wait.." : "Sign in"}
                  </button>
                </div>
              </form>
              <div className="pt-5 text-center text-black-400 text-xs  ">
                Copyright © 2023-2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
