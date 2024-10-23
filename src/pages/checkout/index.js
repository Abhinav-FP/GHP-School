import Layout from "@/layout/Layout";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { formatMultiPrice } from "@/hooks/ValueData";
import {clearCart, removeItem } from "@/redux/cartSlice";
import Details from "../api/admin/Details";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import RenderDetails from "../api/render/RenderDetails";
export default function Index() {
  const router = useRouter();
  const { error, isLoading, Razorpay } = useRazorpay();
  const RAZOPAY_KEY = process.env.NEXT_PUBLIC_RAZOPAY_KEY;
  const cartItemsRedux = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItemsRedux.reduce((sum, item) => {
    return sum + Number(item?.price * item?.quantity);
  }, 0);

  const itemNames = cartItemsRedux.map((item) => item.name);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    aadhaarCard: null,
    panCard: null,
    emailAddress: "",
  });

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

      setFormData((prevData) => ({
        ...prevData,
        [name]: response.data.secure_url,
      }));
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // for file inputs, we use files[0] to get the first selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const CurrentDate = new Date();

  const handleSubmit = async () => {
    if (totalPrice === 0) {
      toast.error("Amount can't be 0!");
      return;
    }
    if (
      formData?.fullName === "" ||
      formData?.contactNumber === "" ||
      formData?.aadhaarCard === null ||
      formData?.panCard === null ||
      formData?.emailAddress === ""
    ) {
      toast.error("Please fill the complete form");
      return;
    }
    setLoading(true);
    const main = new Details();
    const record = new FormData();
    record.append("amount", totalPrice);
    record.append("currency", "INR");
    record.append("receipt", "receipt#1");
    try {
      const res = await main.AddCard(record);
      if (res && res.data && res.data.orderId) {
        const options = {
          key: RAZOPAY_KEY,
          amount: totalPrice,
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for services",
          order_id: res.data.orderId,
          handler: function (response) {
            toast.success("Payment Successful");
            localStorage.setItem("response", JSON.stringify(response));
            saveUserData(response.razorpay_payment_id, totalPrice);
            savePaymentDetails(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              "success"
            ); // Pass 'success'
            router.push(`/success/${response.razorpay_payment_id}`);
            dispatch(clearCart());
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
            router.push(`/cancel/${paymentId}`);
            // Pass 'failed'
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
      formdata.append("type", "donation");
      formdata.append("product_name", itemNames);
      formdata.append("payment_status", payment_status); // Include payment status
      const response = await main.PaymentSave(formdata);

      if (response?.data?.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const saveUserData = async (paymentId, price) => {
    try {
      const main = new RenderDetails();
      const data = new FormData();
      data.append("name", formData?.fullName);
      data.append("number", formData?.contactNumber);
      data.append("aadhar", formData?.aadhaarCard);
      data.append("pan", formData?.panCard);
      data.append("email", formData?.emailAddress);
      data.append("amount", price);
      data.append("payment_id", paymentId);
      const response = await main.donationUserAdd(data);
      if (response?.data?.status) {
        // toast.success(response.data.message);
        console.log("Render api success",response.data.message)
      } else {
        // toast.error(response.data.message);
        console.log("Render api error",response.data.message)
      }
    } catch (error) {
      // toast.error(error?.response?.data?.data?.message || "An error occurred");
      console.log("Render api error",error?.response?.data?.data?.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1204px] px-4">
          <div className="flex flex-wrap -mx-4 md:-mx-6 lg:-mx-10">
            <div className="w-full lg:w-6/12 px-4 md:px-6 lg:px-10">
              <div className="bg-[#ECE1C5]">
                <div className="px-4 lg:px-[40px] pt-4 lg:pt-[28px] pb-4 lg:pb-[18px]  border-b border-black border-opacity-10">
                  <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-0 text-[#1E1E1E]  tracking-[-0.04em]">
                    Sponsor Now
                  </h2>
                </div>
                <div className="px-4 lg:px-[40px] py-4 lg:py-[30px] ">
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      full Name<em className="text-[#EE834E]">*</em>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Contact Number<em className="text-[#EE834E]">* </em>
                    </label>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) => {
                        if (
                          e.target.value.length <= 10 &&
                          /^[0-9]*$/.test(e.target.value)
                        ) {
                          handleChange(e);
                        }
                      }}
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Aadhaar Card<em className="text-[#EE834E]">*</em>
                    </label>
                    <input
                      type="file"
                      name="aadhaarCard"
                      onChange={handleUpload}
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Pan Card<em className="text-[#EE834E]">*</em>
                    </label>
                    <input
                      type="file"
                      name="panCard"
                      onChange={handleUpload}
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Email address<em className="text-[#EE834E]">*</em>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSubmit}
                      className="button-animation  lg:w-[253px]  rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 md:px-6 lg:px-10">
              <div className="pt-4 lg:pt-[28px] pb-4 lg:pb-[18px]  border-b border-black border-opacity-10">
                <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-0 text-[#1E1E1E]  tracking-[-0.04em]">
                  Your Sponsorships
                </h2>
              </div>
              <div className="">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className="text-[#1E1E1E] text-base py-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10">
                        Product
                      </td>
                      <td className="text-[#1E1E1E] text-base py-3 px-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10">
                        QTY
                      </td>
                      <td className="text-[#1E1E1E]  text-right text-base py-3 px-3 tracking-[-0.04em] uppercase merriweather-font font-normal border-b border-black border-opacity-10 pr-0">
                        Amount
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItemsRedux &&
                      cartItemsRedux.map((item, index) => (
                        <tr key={index}>
                          <td className="text-[#1E1E1E] font-medium text-base py-3.5 tracking-[-0.04em] border-b border-black border-opacity-10">
                            <div className="flex items-center ">
                              <div className="bg-[#E1E1E1] w-[70px] lg:w-[91px]">
                                <Image
                                  blurDataURL={`${item.imgUrl}?q=1`}
                                  placeholder="blur"
                                  width={91}
                                  height={86}
                                  src={item.imgUrl}
                                  alt={item.name}
                                  className="object-cover max-w-full"
                                  loading="lazy"
                                />
                              </div>
                              <div className="w-[calc(100%-71px)] lg:w-[calc(100%-91px)] max-w-[179px] pl-2.5 tracking-[-0.04em] text-[#1E1E1E] font-medium merriweather-font font-normal text-base md:text-lg lg:text-xl">
                                {item.name}
                                <button onClick={() => handleRemove(item.id)}>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="text-[#1E1E1E] font-medium text-base py-3.5 px-3 tracking-[-0.04em] border-b border-black border-opacity-10">
                            {item.quantity}
                          </td>
                          <td className="text-[#EE834E] text-right font-medium text-base py-3.5 px-3 pr-0 tracking-[-0.04em] border-b border-black border-opacity-10">
                            {formatMultiPrice(item.price) || 0}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan={2}
                        className="text-[#1E1E1E] uppercase merriweather-font font-normal text-xl lg:text-2xl py-3.5 tracking-[-0.04em] border-b border-black border-opacity-10"
                      >
                        Total
                      </td>
                      <td className="text-[#EE834E] text-right py-3.5 px-3 pr-0 tracking-[-0.04em] text-xl lg:text-2xl border-b border-black border-opacity-10 merriweather-font">
                        {formatMultiPrice(totalPrice) || 0}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
