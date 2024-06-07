'use client';

import Navbar from "@components/navigation/Navbar";
import Banner from "@components/banner/Banner";

const Ideas = () => {
  return (
    <main className="max-w-screen h-[200vh]">
      <Navbar active="Ideas"/>
      <Banner />
    </main>
  );
};

export default Ideas;