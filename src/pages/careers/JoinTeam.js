import React, { useRef, useEffect, useState } from "react";
import Details from "../api/admin/Details";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Vacancie from "./Vacancie";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";

export default function JoinTeam() {
  const [listing, setLisitng] = useState("");
  const [loading, setLoading] = useState(false);
  const [formloading, setFormLoading] = useState(false); // Loading state
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    contactNo: "",
    position: "",
    experience: "",
    resume: null,
    about: "",
  });
  const handleUpload = async (event) => {
    let file = event.target.files[0];
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ghp-cloudinary");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/desw1fnsw/raw/upload`,
        formData
      );

      setFormData((prevData) => ({
        ...prevData,
        resume: response.data.secure_url,
      }));
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error uploading file. Check console for details.");
    } finally {
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    if (formloading) {
      return;
    }
    const main = new Details();
    try {
      const res = await main.vacancyapply(formData);
      if ( res && res?.data) {
        toast.success(res.data.message);
        setFormData({
          name: "",
          surname: "",
          email: "",
          contactNo: "",
          position: "",
          experience: "",
          resume: null,
          about: "",
        });
        setFormLoading(false);
      } else {
        toast.error(res.message);
        setFormLoading(false);

      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while submitting.");
      setFormLoading(false);

    } finally {
      setFormLoading(false);

    }
  };

  const handleClick = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      position: id,
    }));
    router.push("/careers#career-form");
  };
  const getVacancy = () => {
    setLoading(true);
    const main = new Details();
    main
      .vacancyGet()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getVacancy();
  }, []);
  const recaptcha = useRef(null);
  return (
    <>
      <div
        className="bg-white py-[40px] md:py-[80px] lg:py-[100px]"
        id="career-form"
      >
        <div className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">
            Shape the future with us
          </h2>
          <p className="max-w-[965px] text-center tracking-[-0.04em] mx-auto text-center text-[#666666] text-base font-medium mb-6 lg:mb-10">
            Established in July 1990, BVBS School has been a beacon of
            excellence in education for over three decades. Join our dedicated
            team and contribute to a legacy of inspiring young minds and
            fostering a love for learning.
          </p>

          <div className="bg-[#ECE1C5]">
            <div className="px-[30px] lg:px-[50px] pt-6 lg:pt-[30px] pb-4 border-b border-black border-opacity-10">
              <h2 className="merriweather-font font-normal text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E] tracking-[-0.04em] text-center">
                Join our team
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="py-6 lg:py-[30px] px-[20px] lg:px-[40px]"
            >
              <div className="flex -mx-2.5 flex-wrap">
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Name<em className="text-[#FF5400]">*</em>{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    required
                  />
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    SurName{" "}
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Email<em className="text-[#FF5400]">*</em>{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    required
                  />
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Contact No<em className="text-[#FF5400]">*</em>{" "}
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={(e) => {
                      if (
                        e.target.value.length <= 10 &&
                        /^[0-9]*$/.test(e.target.value)
                      ) {
                        handleChange(e);
                      }
                    }
                  }
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    required
                  />
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Position and subject<em className="text-[#FF5400]">*</em>{" "}
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    required
                  >
                    <option value="">Select Teacher</option>
                    {listing &&
                      listing.map((item, index) => (
                        <option key={index} value={item.designation}>
                          {item?.designation}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Experience (in years){" "}
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                  />
                </div>

                <div className="w-full md:w-12/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Upload resume{" "}
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleUpload}
                    className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-12/12 px-2.5 mb-4 lg:mb-6">
                  <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                    Tell us about yourself{" "}
                  </label>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full appearance-none h-11 lg:h-[139px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                  ></textarea>
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-0 g-recaptcha">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                    ref={recaptcha}
                  />
                </div>
                <div className="w-full md:w-6/12 px-2.5 mb-4 lg:mb-0 lg:text-right">
                  <button
                    type="submit"
                    className=" button-animation lg:min-w-[253px] text-center  rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
                  >
                    {formloading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Vacancie listing={listing} loading={loading} handleClick={handleClick} />
    </>
  );
}
