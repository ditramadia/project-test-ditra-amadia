import { useState } from "react";

import Dropdown from "@components/input/Dropdown";
import IdeaPost from "./IdeaPost";

const PostList = () => {
  const [query, setQuery] = useState({
    pageNumber: "1",
    pageSize: "10",
    sortBy: "-published_at"
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
    console.log(query);
  };

  return (
    <div className="screen-container mt-12">

      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="body-md text-neutral-900">Showing 1-10 of 100</p>

        <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
          <div className="flex items-center gap-2">
            <label className="body-md text-neutral-900">Show per page:</label>
            <Dropdown
              name="pageSize"
              data={[{
                value: "10",
                label: "10"
              }, {
                value: "20",
                label: "20"
              }, {
                value: "50",
                label: "50"
              }]}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="body-md text-neutral-900">Sort by:</label>
            <Dropdown
              name="sortBy"
              data={[{
                value: "-published_at",
                label: "Newest"
              }, {
                value: "published_at",
                label: "Oldest"
              }]}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
        <IdeaPost />
      </div>

    </div>
  );
};

export default PostList;