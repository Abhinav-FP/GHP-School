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
  )
}
