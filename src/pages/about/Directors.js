import React, { useEffect, useState } from "react";

import Details from '../api/admin/Details';

import Director1 from "../../../public/About/bydefalult.png";
import Image from "next/image";


export default function Directors() {

  const [profiles, setProfiles] = useState([])
  const [Loading, setLoading] = useState(false)
  const directorapi = () => {
    setLoading(true);
    const main = new Details();
    main
      .getdirector()
      .then((r) => {
        setLoading(false);
        setProfiles(r?.data?.director);
      })
      .catch((err) => {
        setLoading(false);
        setProfiles([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    directorapi();
  }, []);
  return (
    <div className="bg-white pb-[50px] md:pb-[70px] lg:pb-[100px]" id="directors">
      <div className="container sm:container md:container lg:max-w-[1232px] px-4 mx-auto">
        <h2 className="merriweather-font font-normal  text-2xl md:text-3xl lg:text-4xl mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-4 lg:mb-5 text-center ">Directors Desk</h2>
        <div className="mx-auto px-4 py-8 grid lg:grid-cols-2 gap-3.5 lg:gap-5">
          {profiles && profiles.map((profile, index) => (
            <div className="flex bg-[#ECE1C5]" key={index}>
              <div className="w-full md:w-1/2">
                <Image className="max-w-full" src={profile.photo ? profile.photo : Director1} height={379} width={285} alt={profile.name} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col px-3.5 lg:px-[14px] py-3.5 lg:py-[26px]">
                <h2 className="merriweather-font font-normal text-xl md:text-2xl  mb-2 text-[#1E1E1E]  tracking-[-0.04em] mb-2 lg:mb-2.5">{profile.name}</h2>
                <p className="text-[#666666] font-medium text-base gotham-font mb-0 tracking-[-0.04em]">{profile.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
