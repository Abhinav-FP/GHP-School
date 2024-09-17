import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Image from "next/image";
import Vision from "./Vision";
import Mentor from "./Mentor";
import Directors from "./Directors";
import Principal from "./Principal";
import SisterSchools from "./SisterSchools";
import ComingSoon from "./ComingSoon";

export default function index() {
  const profiles = [
    {
      name: "Prashant Sharma",
      image: "/About/Director1.png",
      quote: "Throughout its history, the Gopal Sharma Group of Schools has changed tremendously not only in the number of students it teaches but also in the quality of teaching and other extracurricular activities. I aim to provide the best high-quality education with a friendly and supportive environment to give shape to a promising and confident young breed of future citizens."
    },
    {
      name: "Dikshant Sharma",
      image: "/About/Director2.png",
      quote: "The world's future rests upon the quality of its youth, so it has always been our endeavour to raise children of quality and purpose, to make them the kind of citizens the world needs today. We emphasise on building values, nurturing talents and developing strong academics among students. We not only teach students, we empower them."
    },
    {
      name: "Himanshu Sharma",
      image: "/About/Director1.png",
      quote: "I believe the right educational environment is crucial for a child's development. Inspired by my late grandfather Shri Gopal Sharma's vision, we've created schools in Mumbai and Jaipur with ample natural light and play spaces. My father, Mr. Prashant Sharma, and uncle, Mr. Dikshant Sharma, continue this legacy."
    },
    {
      name: "Yugank Sharma",
      image: "/About/Director2.png",
      quote: "Our School caters to students hailing from diverse Socio-Economic backgrounds. We believe that education cannot be merely reduced to cramming of syllabus but the evolution of a child in a holistic manner. As an educational institution, it becomes imperative for us to see that children are given opportunities to exhibit and nurture their talents."
    }
  ];

  return (
    <div>
      <Header />
      <div className=' bg-no-repeat bg-center bg-cover pt-[195px] pb-[135px] lg:h-[500px] bg-black bg-opacity-40 bg-blend-overlay bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('/About/Banner.png')` }}  >
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
          <h1 className='text-white text-5xl tracking-[-0.04em] libre-baskerville text-center mb-2.5'>
            About Us
          </h1>
        </div>
      </div>
      <Vision/>
      <Mentor/>
      <Directors/>      
      <Principal/>
      <SisterSchools/>
      <ComingSoon/>
      <Footer />
    </div>
  );
}