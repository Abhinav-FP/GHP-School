import Layout from "@/layout/Layout";
import React from "react";
import CareerBg from "../../../public/Career/careerbg.jpg";
import Image from "next/image";
import JoinTeam from "./JoinTeam";
import Vacancie from "./Vacancie";

export default function index() {
  return (
    <Layout>
      <div className="w-full">
        <Image
          blurDataURL={`${CareerBg}?q=1`}
          placeholder="blur"
          className="w-full object-cover"
          height={867}
          width={1440}
          src={CareerBg}
          alt="img"
          priority="true"
        />
      </div>
      <JoinTeam />
      {/* <Vacancie /> */}
    </Layout>
  );
}
