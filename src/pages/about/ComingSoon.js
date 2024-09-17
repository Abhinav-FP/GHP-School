import React from 'react'

export default function ComingSoon() {
  return (
    <div
        style={{
          backgroundImage: `url('/About/School.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="text-white">
        <h2 className="capitalize">gopal sharma memorial school</h2>
        <h2 className="uppercase">COMING SOON</h2>
        <p className="uppercase">Admissions Open in March 2025</p>
        </div>
      </div>
  )
}
