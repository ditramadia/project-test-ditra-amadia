'use client';

import Navbar from "@components/navigation/Navbar";
import Banner from "@components/banner/Banner";
import PostList from "@components/post-list/PostList";

const Ideas = () => {
  return (
    <main className="max-w-screen h-[200vh]">
      <Navbar active="Ideas"/>
      <Banner />
      <PostList />
    </main>
  );
};

export default Ideas;