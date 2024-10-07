import Layout from "@/layout/Layout";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { formatMultiPrice } from "@/hooks/ValueData";
import { removeItem } from "@/redux/cartSlice";
import Details from "../api/admin/Details";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
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

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
console.log("totalPrice",totalPrice)

  const CurrentDate = new Date();

  const handleSubmit = async () => {
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
          amount: totalPrice * 100, 
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for services",
          order_id: res.data.orderId,
          handler: function (response) {
            toast.success("Payment Successful");
            localStorage.setItem("response", JSON.stringify(response));
            // Save payment details
            savePaymentDetails(response.razorpay_order_id, response.razorpay_payment_id);
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
          toast.error("Payment Failed");
        });
        rzp.open();
      } else {
        toast.error(res.data.message || "Failed to create order");
      }
    } catch (error) {
      toast.error("Error creating order");
      console.error("Order creation error:", error); // Log error for debugging
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch('https://ghp-school-backend.vercel.app/payment/create', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         amount: totalPrice, 
  //         currency: 'INR',
  //         receipt: 'receipt#1',
  //       }),
  //     });

  //     const data = await response.json();
  //     if (data.success) {
  //       const options = {
  //         key: RAZOPAY_KEY,
  //         amount: data.amount, 
  //         currency: data.currency,
  //         order_id: data.orderId,
  //         name: "Your Company Name",
  //         description: "Payment for services",
  //         handler: function (response) {
  //           console.log(response)
  //           toast.success("Payment Successful");
  //           savePaymentDetails(response.
  //             razorpay_order_id
  //             , response.razorpay_payment_id);
  //         },
  //         prefill: {
  //           name: "Customer Name",
  //           email: "customer@example.com",
  //           contact: "1234567890",
  //         },
  //         notes: {
  //           address: "Razorpay Corporate Office",
  //         },
  //         theme: {
  //           color: "#F37254",
  //         },
  //       };
  //       const rzp = new Razorpay(options);
  //       rzp.on("payment.failed", function (response) {
  //         toast.error("Payment Failed");
  //       });
  //       rzp.open();
  //     } else {
  //       toast.error("Failed to create Razorpay order.");
  //     }
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //     toast.error("Error creating order.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  const savePaymentDetails = async (orderId, paymentId) => {
    setLoading(true);
    try {
      const main = new Details();
      const formdata = new FormData();
      formdata.append("order_id", orderId)
      formdata.append("payment_id", paymentId)
      formdata.append("amount", totalPrice)
      formdata.append("currency", "INR")
      const response = await main.PaymentSave(formdata);
      if (response?.data?.status) {
        toast.success(response.data.message);
        handleClose();
        principleData();

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Layout>
      <div className="w-full bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="mx-auto container sm:container md:container lg:max-w-[1232px] px-4">
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
                      full Name<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="text"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Contact Number<em className="text-[#EE834E]">* </em>
                    </label>
                    <input
                      type="text"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Adhaar Card<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="file"
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>

                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Pan Card<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="file"
                      className="bg-white border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="mb-4 lg:mb-6">
                    <label className="inline-block text-base text-[#1E1E1E] tracking-[-0.04em] opacity-80 mb-2 lg:mb-2.5 uppercase">
                      Email address<em className="text-[#EE834E]">*</em>{" "}
                    </label>
                    <input
                      type="email"
                      className="border border-black border-opacity-10 px-3.5 py-2 w-full h-11 lg:h-14 appearance-none h-11 lg:h-[54px] text-[#1E1E1E] tracking-[-0.04em] leading-tight focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="bg-[#EE834E] lg:w-[253px] hover:bg-[#ECCD6E] rounded px-8 lg:px-12 py-2 lg:py-3.5 text-white text-base lg:text-lg font-normal tracking-[-0.04em]"
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
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
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
