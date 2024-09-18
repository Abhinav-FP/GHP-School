import React from 'react'

export default function Directors() {
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
    <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]">
        <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
          <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-5 text-center ">Directors Desk</h2>
          <div className="mx-auto px-4 py-8 grid lg:grid-cols-2 gap-3.5 lg:gap-5">
            {profiles && profiles.map((profile, index) => (
              <div className="flex bg-[#ECE1C5]" key={index}>
                <div className="w-full md:w-1/2">
                <img className="max-w-full" src={profile.image} height={379} width={285} alt={profile.name} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col px-3.5 lg:px-[14px] py-3.5 lg:py-[26px]">
                  <h2 className="merriweather-font font-normal text-xl md:text-2xl  mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-2 lg:mb-2.5">{profile.name}</h2>
                  <p className="text-[#666666] font-medium text-base gotham-font mb-0 tracking-[-0.04em]">{profile.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
