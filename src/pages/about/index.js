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
      <div
        style={{
          backgroundImage: `url('/About/Banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <h2>About Us</h2>
      </div>
      {/* Vision Mission */}
      <div className="container mt-10 flex">
        <div className="w-1/2 flex flex-col bg-[#EE843E]">
        <h2>Vision</h2>
        <p>“Steadfast in faith” </p>
        <p>We aim to rise above the ordinary by developing education which can transform lives and communities. Our school is a place of excellence where children can achieve full potential in their academic, creative, personal, physical, moral and spiritual development.</p>
        </div>
        <div className="w-1/2 flex flex-col bg-[#ECE1C5]">
        <h2 >Mission</h2>
        <p>“Education For All”</p>
        <p>We create a stimulating environment where students of all abilities excel in academics, culture, and more. Our dedicated staff inspires each child to reach their full potential in a disciplined, caring, and respectful atmosphere that values individual growth and fosters moral and spiritual development.</p>
        </div>
      </div>
      {/* Our Mentor */}
      <div className="container mt-10">
        <h2>Our Mentor</h2>
        <Image src={Mentor} alt="Shri Gopal Sharma" width={100} height={100}/>
        <p>This was the dream nurtured by Shri Gopal Sharma and today this dream has materialised and is taking shape in the form of our school. He was born in Jaipur on 8th July, 1938 to an educationist father, Shri Chandra Bhan Sharma and a pious mother Smt. Durga Devi Sharma. After a humble beginning he rose to carve a niche in the society.</p>
        <p>Qualities like fearlessness and honesty were deep-rooted in his mind from early childhood. After his initial schooling in Jaipur, he completed his formal education from Mumbai University. Editor, theatre personality, social worker and a successful business person, all rolled into one, he was a multi-faceted man with numerous talents.</p>
        <p>A hard-working and resourceful person, he was determined to make a mark in the field of education. He firmly believed in the concept that quality education should be imparted to all and this resulted in the birth of Powai English School at Powai.</p>
        <p>During his lifetime, Shri Gopal Sharma worked for the upliftment of the downtrodden. The long journey started by Shri Gopal Sharma in the field of education, is today spearheaded by his sons, Shri Prashant Sharma and Shri Dikshant Sharma.</p>
      </div>
      {/* Directors */}
      <div className="container mt-10">
        <h2>Directors Desk</h2>
        <div className="mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {profiles && profiles.map((profile, index) => (
        <div className="flex" key={index}>
            <div className="w-1/2">
            <img src={profile.image} alt={profile.name} />
            </div>
            <div className="w-1/2 flex flex-col">
            <h2>{profile.name}</h2>
            <p>{profile.quote}</p>
            </div>
        </div>
      ))}
    </div>

      </div>
      {/* Message from principal */}
      <div className="container my-10 bg-[#ECE1C5]">
        <h2 className="capitalize">Message from the principal</h2>
        <div className="flex">
        <Image src={Principal} height={100} width={100}/>
        <div className="flex flex-col">
        <p>We at Bal Vishwa Bharti Public School are committed to providing a balanced education that nurtures both academic excellence and personal growth. Our dedicated educators strive to inspire students to become confident, compassionate, and well-rounded individuals. We understand that true growth happens when students engage in collaborative projects, participate in sports, and explore their interests outside the academic sphere. Our diverse range of extracurricular programs is designed to foster teamwork, build leadership skills, and encourage a balanced lifestyle. Our faculty and students together build a vibrant school community, where every child is encouraged to reach their full potential.</p>
        <p>- Usha Kiran Sharma</p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
