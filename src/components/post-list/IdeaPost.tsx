import Image from "next/image";
import Link from "next/link";

const IdeaPost = () => {
  return (
    <Link href='/ideas'>
      <div className="bg-neutral-100 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-shadow cursor-pointer group transition-normal md:hover:scale-105">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src="https://via.placeholder.com/300" 
            alt="Post" 
            fill
            className="object-cover transition-normal scale-125 group-hover:scale-100" />
        </div>

        <div className="p-3 lg:p-5">
          <span className="text-start bold-sm text-neutral-400">5 SEPTEMBER 2022</span>
          <h3 className="mt-1 text-start line-clamp-3 heading-5 text-neutral-900">Kenali Tingkatan Influencers Berdasarkan Jumlah Followers Kenali Tingkatan Influencers Berdasarkan Jumlah Followers</h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeaPost;