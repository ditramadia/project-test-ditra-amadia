import Image from "next/image";
import Link from "next/link";
import { ImageType } from "@/interfaces/ImageType";
import { parseDate } from "@/utils/dateParser";
import { useState } from "react";

interface IdeaPostProps {
  title: string,
  dateRaw: string,
  imageLow?: ImageType,
  imageMed?: ImageType,
  slug: string,
}

const IdeaPost = (props: IdeaPostProps) => {
  const { title, dateRaw, imageLow, imageMed, slug } = props;

  const [img, setImg] = useState<string>(imageMed ? imageMed.url : "/images/image-not-found.jpeg");

  return (
    <Link href={`/ideas/${slug}`}>
      <div className="h-full bg-neutral-100 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-shadow cursor-pointer group transition-normal md:hover:scale-105">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={img}
            alt={"Thumbnail for " + title}
            onError={() => setImg("/images/image-not-found.jpeg")}
            fill
            className="object-cover transition-normal scale-125 group-hover:scale-100" 
            loading="lazy"
            placeholder="blur"
            blurDataURL={imageLow ? imageLow.url : "/images/image-not-found.jpeg"}
            />
        </div>

        <div className="p-3 lg:p-5">
          <span className="text-start bold-sm text-neutral-400">{parseDate(dateRaw).toUpperCase()}</span>
          <h3 className="mt-1 text-start line-clamp-3 heading-5 text-neutral-900">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeaPost;