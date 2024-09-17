import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Mentor from "../../../public/About/Mentor.png";
import Principal from "../../../public/About/Principal.png";

import Image from "next/image";

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
      {/* Banner Section */}
      <div className=' bg-no-repeat bg-center bg-cover pt-[195px] pb-[135px] lg:h-[500px] bg-black bg-opacity-40 bg-blend-overlay bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url('/About/Banner.png')` }}  >
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto ">
          <h1 className='text-white text-5xl tracking-[-0.04em] libre-baskerville text-center mb-2.5'>
            About Us
          </h1>
        </div>
      </div>
      {/* Vision Mission */}
      <div className="bg-white py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 bg-[#EE843E] px-[30px] lg:px-[40px] py-10 md:py-16">
              <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-2">Vision</h2>
              <h3 className="text-black text-xl lg:text-2xl merriweather-font tracking-[-0.04em] font-normal mb-1.5 lg:mb-2.5">“Steadfast in faith” </h3>
              <p className="tracking-[-0.04em] gotham-font text-white text-base font-medium ">We aim to rise above the ordinary by developing education which can transform lives and communities. Our school is a place of excellence where children can achieve full potential in their academic, creative, personal, physical, moral and spiritual development.</p>
            </div>
            <div className="w-full md:w-1/2 bg-[#ECE1C5] px-[30px] lg:px-[40px] py-10 md:py-16">
              <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em]" >Mission</h2>
              <h3 className="text-[#666666] text-xl lg:text-2xl merriweather-font tracking-[-0.04em] font-normal mb-1.5 lg:mb-2.5">“Education For All”</h3>
              <p className="tracking-[-0.04em] gotham-font text-[#666666] text-base font-medium">We create a stimulating environment where students of all abilities excel in academics, culture, and more. Our dedicated staff inspires each child to reach their full potential in a disciplined, caring, and respectful atmosphere that values individual growth and fosters moral and spiritual development.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Mentor */}
      <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-5 text-center ">Our Mentor</h2>
          <div className="text-center">
            <Image  className="block mx-auto mb-4 lg:mb-6 max-w-full" src={Mentor} alt="Shri Gopal Sharma" width={317} height={396} />
            <h4 className="merriweather-font font-normal text-xl md:text-2xl  mb-2 text-[#EE834E]  tracking-[-0.04em] mb-2 lg:mb-2.5 text-center">Shri Gopal Sharma</h4>
            <p className="text-[#1E1E1E] mb-4 md:mb-6 gotham-font tracking-[-0.04em] font-medium">(08/07/1938 - 24/01/1998)</p>
            <div className="text-[#EE834E] gotham-font font-medium italic  tracking-[-0.04em] mb-6">“EDUCATE A CHILD AND DISCOVER A PERSONALITY.”</div>
          </div>
          <div className="max-w-[965px] mx-auto">
            <p className="text-[#666666] font-medium text-base  gotham-font text-center mb-1.5 tracking-[-0.04em]">This was the dream nurtured by Shri Gopal Sharma and today this dream has materialised and is taking shape in the form of our school. He was born in Jaipur on 8th July, 1938 to an educationist father, Shri Chandra Bhan Sharma and a pious mother Smt. Durga Devi Sharma. After a humble beginning he rose to carve a niche in the society.</p>
            <p className="text-[#666666] font-medium text-base  gotham-font text-center mb-1.5 tracking-[-0.04em]">Qualities like fearlessness and honesty were deep-rooted in his mind from early childhood. After his initial schooling in Jaipur, he completed his formal education from Mumbai University. Editor, theatre personality, social worker and a successful business person, all rolled into one, he was a multi-faceted man with numerous talents.</p>
            <p className="text-[#666666] font-medium text-base  gotham-font text-center mb-1.5 tracking-[-0.04em]">A hard-working and resourceful person, he was determined to make a mark in the field of education. He firmly believed in the concept that quality education should be imparted to all and this resulted in the birth of Powai English School at Powai.</p>
            <p className="text-[#666666] font-medium text-base  gotham-font text-center mb-1.5 tracking-[-0.04em]">During his lifetime, Shri Gopal Sharma worked for the upliftment of the downtrodden. The long journey started by Shri Gopal Sharma in the field of education, is today spearheaded by his sons, Shri Prashant Sharma and Shri Dikshant Sharma.</p>
          </div>
        </div>
      </div>
      {/* Directors */}
      <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-5 text-center ">Directors Desk</h2>
          <div className="mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
            {profiles && profiles.map((profile, index) => (
              <div className="flex bg-[#ECE1C5]" key={index}>
                <div className="w-full md:w-1/2">
                  <img className="max-w-full" src={profile.image} height={379} width={285} alt={profile.name} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col px-3.5 lg:px-5 py-3.5 lg:py-[30px]">
                  <h2 className="merriweather-font font-normal text-xl md:text-2xl  mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-2 lg:mb-2.5">{profile.name}</h2>
                  <p className="text-[#666666] font-medium text-base gotham-font mb-0 tracking-[-0.04em]">{profile.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Message from principal */}
      <div className="bg-[#ECE1C5] py-[50px] md:py-[70px] lg:py-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-[37px] text-center ">Message from the principal</h2>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-6/12 px-4 ">
               <Image className="max-w-full block mx-auto mb-3 md:mb-0" src={Principal} height={500} width={407} />
            </div>
            <div className="w-full md:w-6/12 px-4">
              <p className="text-[#666666] font-medium text-base gotham-font mb-5 lg:mb-[28px] tracking-[-0.04em] ">We at Bal Vishwa Bharti Public School are committed to providing a balanced education that nurtures both academic excellence and personal growth. Our dedicated educators strive to inspire students to become confident, compassionate, and well-rounded individuals. We understand that true growth happens when students engage in collaborative projects, participate in sports, and explore their interests outside the academic sphere. Our diverse range of extracurricular programs is designed to foster teamwork, build leadership skills, and encourage a balanced lifestyle. Our faculty and students together build a vibrant school community, where every child is encouraged to reach their full potential.</p>
              <p className="libre-baskerville font-normal text-xl md:text-[26px]  mb-0 text-[#EE834E]  tracking-[-0.04em]">- Usha Kiran Sharma</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
