'use client';

import Navbar from "@components/navigation/Navbar";
import Banner from "@components/banner/Banner";
import PostList from "@components/post-list/PostList";

const Ideas = () => {
  return (
    <main className="max-w-screen min-h-screen">
      <Navbar active="Ideas"/>
      <Banner />
      <PostList />
    </main>
  );
};

export default Ideas;