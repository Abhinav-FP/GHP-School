import React, { useState } from "react";
import toast from "react-hot-toast";
import Details from "../api/admin/Details";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { FiEdit } from "react-icons/fi";
import Router from "next/router";
import axios from "axios";

function ContactForm() {
  const { error, isLoading, Razorpay } = useRazorpay();
  const RAZOPAY_KEY = process.env.NEXT_PUBLIC_RAZOPAY_KEY;
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState({
    class: "",
    optional: "",
    date: "",
    aadhar: "",
    scholar: "",
    name: "",
    dobWords: "",
    type: "",
    dob: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    guardianName: "",
    guardianOccupation: "",
    guardianPhone: "",
    fatheremail: "",
    email: "",
    address: "",
    school: "",
    class_percentage: "",
    sibling: "",
    belongs: "",
    facility: "",
    image: "",
    birth: "",
    additional: "",
  });
  const [formloading, setFormLoading] = useState(false); // Loading state
  const [checkboxes, setCheckboxes] = useState({
    correctInfo: false,
    agreeRules: false,
    correctDOB: false,
    explainedRules: false,
    noResponsibility: false,
    provisionalAdmission: false,
  });
  const totalPrice = record.type === "new" ? 500 : 200;

  // Image uploader logic here
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false); // Track uploading state

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 2) {
        alert("File size exceeds 2 MB. Please upload a smaller image.");
        return;
      }
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      await uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID fa9cff918a9554a");

    const formdata = new FormData();
    formdata.append("image", file, "GHJQTpX.jpeg");
    formdata.append("type", "image");
    formdata.append("title", "Simple upload");
    formdata.append("description", "This is a simple image upload in Imgur");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://api.imgur.com/3/upload",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.data && data.data.link) {
        setRecord((prevState) => ({ ...prevState, image: data.data.link }));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePaySubmit = async (e) => {
    e.preventDefault();
    const allChecked = Object.values(checkboxes).every((value) => value);
    if (!allChecked) {
      alert("Please ensure all declarations are checked before submitting.");
      return;
    }
    // if(record?.image==""){
    //   toast.error("Please upload a valid image!");
    //   return;
    // }
    setLoading(true);
    const main = new Details();
    const formdata = new FormData();
    formdata.append("amount", totalPrice);
    formdata.append("currency", "INR");
    formdata.append("receipt", "receipt#1");
    try {
      const res = await main.AddCard(formdata);
      if (res && res.data && res.data.orderId) {
        const options = {
          key: RAZOPAY_KEY,
          amount: totalPrice * 100,
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for services",
          order_id: res.data.orderId,
          handler: function (response) {
            if (response.razorpay_payment_id) {
              toast.success("Payment Successful");
              localStorage.setItem("response", JSON.stringify(response));
              handleSubmit();
              savePaymentDetails(
                response.razorpay_order_id,
                response.razorpay_payment_id,
                "success"
              );
              Router.push(`/successform/${response.razorpay_payment_id}`);
            }
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "1234567890",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#F37254",
          },
        };

        const rzp = new Razorpay(options);
        rzp.on("payment.failed", function (response) {
          const error = response.error;
          const orderId = error?.metadata?.order_id;
          const paymentId = error?.metadata?.payment_id;
          if (orderId && paymentId) {
            savePaymentDetails(orderId, paymentId, "failed");
            Router.push(`/cancel/${response.razorpay_payment_id}`);
          } else {
            console.error("Failed to retrieve Razorpay order or payment ID");
          }
        });
        rzp.open();
      } else {
        toast.error(res.data.message || "Failed to create order");
      }
    } catch (error) {
      toast.error("Error creating order");
      console.error("Order creation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const savePaymentDetails = async (orderId, paymentId, payment_status) => {
    setLoading(true);
    try {
      const main = new Details();
      const formdata = new FormData();
      formdata.append("order_id", orderId);
      formdata.append("payment_id", paymentId);
      formdata.append("amount", totalPrice);
      formdata.append("currency", "INR");
      formdata.append("type", "admission");
      formdata.append("product_name", record?.name);
      formdata.append("payment_status", payment_status);
      const response = await main.PaymentSave(formdata);
      if (response?.data?.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error in savePaymentDetails:", error); // Log the error
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRecord((prevState) => ({ ...prevState, [name]: value }));
    if (name === "dob") {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Date(value).toLocaleDateString(
        "en-US",
        options
      );
      setRecord((prevState) => ({ ...prevState, dobWords: formattedDate }));
    }
  };
  const handleUpload = async (event) => {
    "event", event;
    let name = event.target.name;
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

      setRecord((prevData) => ({
        ...prevData,
        [name]: response.data.secure_url,
      }));
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  const handleSubmit = async () => {
    setFormLoading(true);
    if (formloading) {
      return;
    }
    const main = new Details();
    try {
      const res = await main.AdmissionFormAdd(record);
      if (res && res?.data) {
        toast.success(res.data.message);
        setRecord({
          class: "",
          optional: "",
          date: "",
          aadhar: "",
          scholar: "",
          name: "",
          dobWords: "",
          type: "",
          dob: "",
          fatherName: "",
          fatherOccupation: "",
          fatherPhone: "",
          motherName: "",
          motherOccupation: "",
          motherPhone: "",
          guardianName: "",
          guardianOccupation: "",
          guardianPhone: "",
          fatheremail: "",
          email: "",
          address: "",
          school: "",
          class_percentage: "",
          sibling: "",
          belongs: "",
          facility: "",
          image: "",
          birth: "",
          additional: "",
        });
        setFormLoading(false);
      } else {
        toast.error(res.message);
        setFormLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred while submitting.");
      setFormLoading(false);
    } finally {
      setFormLoading(false);
    }
  };
console.log("record",record);
  return (
    <div className="bg-white py-[50px] md:py-[70px] lg:py-[100px]">
      <form
        onSubmit={handlePaySubmit}
        className="container sm:container md:container lg:max-w-[1204px] px-4 mx-auto "
      >
        <div className="sm:flex justify-between items-center mb-2">
          <div></div>
          <div className="flex flex-col">
            <h1 className="merriweather-font font-normal text-center text-2xl md:text-3xl lg:text-4xl mb-2.5 text-[#1E1E1E]  tracking-[-0.04em]">
              Apply Now
            </h1>
            <p className="text-center text-base text-[#1E1E1E]  tracking-[-0.04em] opacity-80 font-medium mb-5  lg:mb-[30px]">
              (Form no : E01)
            </p>
          </div>
          {/* Image Uploader */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-40 h-40">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover border border-gray-300 mb-4 rounded-md"
                />
              ) : (
                <span className="px-4 py-8 block w-40 h-40 object-cover border border-gray-300 mb-4 rounded-md text-black">
                  Please upload <br />
                  an image here
                </span>
              )}
              <label className="absolute top-1 right-1 p-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                <FiEdit className="h-5 w-5 text-gray-600" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="border-t border-black border-opacity-10 pt-10 lg:pt-[50px]">
          <div className="flex flex-wrap -mx-2.5">
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Class*
              </label>
              <select
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                name="class"
                value={record.class}
                onChange={handleChange}
                id="class"
                required
              >
                <option value="" disabled>
                  Select Class
                </option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI arts">XI Arts</option>
                <option value="XI commerce">XI Commerce</option>
                <option value="XI science">XI Science</option>
                <option value="XII arts">XII Arts</option>
                <option value="XII commerce">XII Commerce</option>
                <option value="XII science">XII Science</option>
              </select>
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Optional Subject
              </label>
              <select
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                name="optional"
                value={record.optional}
                onChange={handleChange}
                id="optional"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {record?.class === "XI arts" || record?.class === "XII arts" ? (
                  <>
                    <option value="history">History</option>
                    <option value="political-science">Political Science</option>
                    <option value="sociology/economics">
                      Sociology /Economics
                    </option>
                    <option value="sanskrit-sahitya">Sanskrit Sahitya</option>
                    <option value="hindi-sahitya">Hindi Sahitya</option>
                    <option value="home-science">Home Science</option>
                  </>
                ) : record?.class === "XI commerce" ||
                  record?.class === "XII commerce" ? (
                  <>
                    <option value="accountancy">Accountancy</option>
                    <option value="business-study">Business Study</option>
                    <option value="Economics/Computer-Science/Maths">
                      Economics / Computer Science / Maths
                    </option>
                    <option value="hindi-typing">Hindi Typing</option>
                    <option value="english-typing">English Typing</option>
                  </>
                ) : record?.class === "XI science" ||
                  record?.class === "XII science" ? (
                  <>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="Biology/Maths">Biology/Maths</option>
                  </>
                ) : null}
              </select>
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of Admission*
              </label>
              <input
                type="date"
                name="date"
                value={record.date}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Aadhar No.*
              </label>
              <input
                type="text"
                name="aadhar"
                value={record.aadhar}
                required
                onChange={(e) => {
                  if (
                    e.target.value.length <= 12 &&
                    /^[0-9]*$/.test(e.target.value)
                  ) {
                    handleChange(e);
                  }
                }}
                maxLength="12"
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Scholar’s register no (official use only)
              </label>
              <input
                type="number"
                name="scholar"
                value={record.scholar}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Full Name*{" "}
              </label>
              <input
                type="text"
                name="name"
                value={record.name}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Type of Admission*{" "}
              </label>
              <select
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                name="type"
                value={record.type}
                onChange={handleChange}
                id="type"
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="new">New Admission</option>
                <option value="renew">Renew after Class X for Grade XI</option>
              </select>
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dob"
                value={record.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Date of birth (In Words)
              </label>
              <input
                type="text"
                name="dobWords"
                value={record?.dobWords}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s name*
              </label>
              <input
                type="text"
                name="fatherName"
                value={record?.fatherName}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation*{" "}
              </label>
              <input
                type="text"
                name="fatherOccupation"
                value={record?.fatherOccupation}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s Phone Number*{" "}
              </label>
              <input
                type="text"
                name="fatherPhone"
                value={record?.fatherPhone}
                required
                onChange={(e) => {
                  if (
                    e.target.value.length <= 10 &&
                    /^[0-9]*$/.test(e.target.value)
                  ) {
                    handleChange(e);
                  }
                }}
                maxLength="10"
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Mother’s name*
              </label>
              <input
                type="text"
                name="motherName"
                value={record?.motherName}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation*{" "}
              </label>
              <input
                type="text"
                name="motherOccupation"
                value={record?.motherOccupation}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Mother’s Phone Number*{" "}
              </label>
              <input
                type="text"
                name="motherPhone"
                value={record?.motherPhone}
                required
                onChange={(e) => {
                  if (
                    e.target.value.length <= 10 &&
                    /^[0-9]*$/.test(e.target.value)
                  ) {
                    handleChange(e);
                  }
                }}
                maxLength="10"
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Guardian’s name*
              </label>
              <input
                type="text"
                name="guardianName"
                value={record?.guardianName}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Occupation*{" "}
              </label>
              <input
                type="text"
                name="guardianOccupation"
                value={record?.guardianOccupation}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Guardian’s Phone Number*
              </label>
              <input
                type="text"
                name="guardianPhone"
                value={record?.guardianPhone}
                required
                onChange={(e) => {
                  if (
                    e.target.value.length <= 10 &&
                    /^[0-9]*$/.test(e.target.value)
                  ) {
                    handleChange(e);
                  }
                }}
                maxLength="10"
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s/Guardian’s Address*
              </label>
              <textarea
                type="text"
                name="address"
                value={record?.address}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              ></textarea>
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Father’s/Mother’s Email*
              </label>
              <input
                type="email"
                name="fatheremail"
                value={record?.fatheremail}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                required
              />
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Student’s Email*
              </label>
              <input
                type="email"
                name="email"
                value={record?.email}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-8/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Last School attended*
              </label>
              <input
                type="text"
                name="school"
                value={record?.school}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-4/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Class passed & Percentage*
              </label>
              <input
                type="text"
                name="class_percentage"
                value={record?.class_percentage}
                onChange={handleChange}
                required
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Name of brother/sister studying in this school
              </label>
              <input
                type="text"
                name="sibling"
                value={record?.sibling}
                onChange={handleChange}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Birth Certificate
              </label>
              <input
                type="file"
                name="birth"
                onChange={handleUpload}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-6/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Any Additional Documents
              </label>
              <input
                type="file"
                name="additional"
                onChange={handleUpload}
                className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
              />
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Candidate belongs to*{" "}
              </label>
              <div className="flex flex-wrap gap-1.5 lg:gap-3">
                {["sc", "st", "obc", "general", "sbc", "ews", "other"].map(
                  (category) => (
                    <div
                      key={category}
                      className="border border-black  p-3 lg:p-4 border-opacity-10 min-w-[120px] md:min-w-[154px]"
                    >
                      <input
                        id={category}
                        type="radio"
                        name="belongs"
                        value={category}
                        onChange={handleChange}
                        checked={record.belongs === category}
                        required
                        className="w-5 h-5 lg:w-6 lg:h-6 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                        aria-labelledby={category}
                        aria-describedby={category}
                      />
                      <label
                        htmlFor={category}
                        className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 "
                      >
                        {category.toUpperCase()}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-5">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                Whether conveyance facility needed*
              </label>
              <div className="flex flex-wrap -mx-2.5">
                <div className="w-6/12 px-2.5 mb-2 lg:mb-0">
                  <div className="border border-black p-3 lg:p-4 border-opacity-10 ">
                    <input
                      id="yes"
                      type="radio"
                      name="facility"
                      value="yes"
                      onChange={handleChange}
                      checked={record.facility === "yes"}
                      required
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                      aria-labelledby="yes"
                      aria-describedby="yes"
                    />
                    <label
                      htmlFor="yes"
                      className="cursor-pointer ml-2 text-sm font-medium text-[#1E1E1E] opacity-80 tracking-[-0.04em]"
                    >
                      YES
                    </label>
                  </div>
                </div>

                <div className="w-6/12 px-2.5 mb-2 lg:mb-0">
                  <div className="border border-black p-3 lg:p-4 border-opacity-10  ">
                    <input
                      id="no"
                      type="radio"
                      name="facility"
                      value="no"
                      onChange={handleChange}
                      checked={record.facility === "no"}
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-white checked:border-[#EE834E] cursor-pointer"
                      aria-labelledby="no"
                      aria-describedby="no"
                    />
                    <label
                      htmlFor="no"
                      className="cursor-pointer ml-2 text-base font-medium text-[#1E1E1E] opacity-80 tracking-[-0.04em]"
                    >
                      NO
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-2">
              <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                I Solemnly declare that
              </label>
              <ul className="space-y-2">
                <li className="relative pl-5">
                  <input
                    id="correctInfo"
                    type="checkbox"
                    name="correctInfo"
                    checked={checkboxes.correctInfo}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="correctInfo"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The above information is correct.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id="agreeRules"
                    type="checkbox"
                    name="agreeRules"
                    checked={checkboxes.agreeRules}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="agreeRules"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    I agree to abide by Rules and Regulations of the school and
                    the Education Department (Subject to any change that may be
                    made in them.)
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id="correctDOB"
                    type="checkbox"
                    name="correctDOB"
                    checked={checkboxes.correctDOB}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="correctDOB"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The date of birth entered above is correct and no request
                    for any change will be made.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id="explainedRules"
                    type="checkbox"
                    name="explainedRules"
                    checked={checkboxes.explainedRules}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="explainedRules"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    I have explained these rules and regulations to my
                    son/daughter and in case if he/she violates any rules and
                    regulations of the school or is involved in any breach of
                    discipline or neglect of studies, his/her name may be
                    struck-off the rolls of the school. The decision of the
                    management shall be final in all matters and binding on me
                    and my son/daughter.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id="noResponsibility"
                    type="checkbox"
                    name="noResponsibility"
                    checked={checkboxes.noResponsibility}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="noResponsibility"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    The School will not be held responsible for any accident,
                    injuries of loss to the student while at the school or at
                    the time of participating in any activity.
                  </label>
                </li>
                <li className="relative pl-5">
                  <input
                    id="provisionalAdmission"
                    type="checkbox"
                    name="provisionalAdmission"
                    checked={checkboxes.provisionalAdmission}
                    onChange={handleCheckboxChange}
                    className="absolute left-0 top-1 w-[14px] h-[14px] bg-transparent rounded-full border border-gray-300 focus:ring-0 checked:bg-[#EE834E] checked:border-[#EE834E] cursor-pointer"
                  />
                  <label
                    htmlFor="provisionalAdmission"
                    className="cursor-pointer ml-1 text-base font-normal text-[#1E1E1E] opacity-80 tracking-[-0.04em] italic "
                  >
                    Admission granted to a student will be provisional until the
                    relevant documents are not submitted duly signed/counter
                    signed by the concerned authorities.
                  </label>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-12/12 px-2.5 mb-10 md:mb-14 lg:mb-20">
              <p className="Gotham-reguler text-base lg:text-lg font-normal text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-0">
                Submitting the form does not guarantee admission. The student
                will be required to take a test, after which a physical copy of
                the following supporting documents must be submitted to the
                school:{" "}
              </p>
              <ul className="Gotham-reguler text-base lg:text-lg font-normal text-[#1E1E1E] tracking-[-0.04em] opacity-80 pl-5 list-disc">
                <li>{`Student's photograph`}</li>
                <li>Birth certificate</li>
                <li>Aadhar card</li>
                <li>Transfer/migration certificate</li>
                <li>Previous mark sheet</li>
                <li>Caste certificate</li>
              </ul>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                className="button-animation  rounded px-8 lg:px-24 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
