import { useEffect, useState } from "react";
import axios from "axios";

import { IdeaPostType } from "@interfaces/IdeaPostType";

import Dropdown from "@components/input/Dropdown";
import IdeaPost from "@components/post-list/IdeaPost";

const PostList = () => {
  const [query, setQuery] = useState({
    pageNumber: "1",
    pageSize: "10",
    sortBy: "-published_at"
  });
  const [dataInfo, setDataInfo] = useState({
    showStart: 1,
    showEnd: 10,
    total: 100
  });
  const [loading, isLoading] = useState<boolean>(false);
  const [data, setData] = useState<IdeaPostType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
    console.log(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ideas?page[number]=${query.pageNumber}&page[size]=${query.pageSize}&append[]=small_image&append[]=medium_image&sort=${query.sortBy}`);
        setData(response.data.data);
        setDataInfo({
          showStart: (parseInt(query.pageNumber) - 1) * 10 + 1,
          showEnd: (parseInt(query.pageNumber) - 1) * 10 + parseInt(query.pageSize),
          total: response.data.meta.total
        })
      } catch (error) {
        console.log(error);
      } finally {
        isLoading(false);
      }
    }

    fetchData();
    console.log(data);
  }, [query]);

  return (
    <div className="screen-container mt-12">

      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="body-md text-neutral-900">Showing {dataInfo.showStart}-{dataInfo.showEnd} of {dataInfo.total}</p>

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
        {
          data.map((post) => (
            <IdeaPost 
              key={post.id} 
              title={post.title}
              dateRaw={post.published_at}
              imageLow={post.small_image && post.small_image[0].url}
              imageMed={post.medium_image && post.medium_image[0].url}
              slug={post.slug}
            />
          ))
        }
      </div>

    </div>
  );
};

export default PostList;