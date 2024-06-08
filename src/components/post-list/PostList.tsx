import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { IdeaPostType } from "@interfaces/IdeaPostType";

import Dropdown from "@components/input/Dropdown";
import IdeaPost from "@components/post-list/IdeaPost";
import IdeaPostLazy from "@components/post-list/IdeaPostLazy";
import Pagination from "@components/input/Pagination";

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
    window.scrollTo(0, 0);
    setQuery({
      ...query,
      pageNumber: "1",
      [e.target.name]: e.target.value
    });
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
  }, [query]);

  return (
    <div className="screen-container mt-12 pb-20">

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

      {
        loading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {
              Array(10).fill(0).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="animate-pulse"
                >
                  <IdeaPostLazy />
                </motion.div>
              ))
            }
          </div>
        ) : !data ? (
          <p className="h-64 mt-8 py-20 flex justify-center body-md text-neutral-400">No ideas found :(</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {
              data.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IdeaPost 
                    key={post.id} 
                    title={post.title}
                    dateRaw={post.published_at}
                    imageLow={post.small_image ? post.small_image[0] : undefined}
                    imageMed={post.medium_image ? post.medium_image[0] : undefined}
                    slug={post.slug}
                  />
                </motion.div>
              ))
            }
          </div>
        )
      }

      <Pagination
        disabled={loading || !data}
        currentPage={parseInt(query.pageNumber)}
        totalPages={Math.ceil(dataInfo.total / parseInt(query.pageSize))}
        changePage={(page) => {
          window.scrollTo(0, 0);
          setQuery({ ...query, pageNumber: page.toString()})
        }}
      />

    </div>
  );
};

export default PostList;