import Image from "next/image";
import Link from "next/link";
import { parseDate } from "@/utils/dateParser";

interface IdeaPostProps {
  title: string,
  dateRaw: string,
  imageLow?: string,
  imageMed?: string,
  slug: string,
}

const IdeaPost = (props: IdeaPostProps) => {
  const { title, dateRaw, imageLow, imageMed, slug } = props;

  return (
    <Link href={`/ideas/${slug}`}>
      <div className="h-full bg-neutral-100 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-shadow cursor-pointer group transition-normal md:hover:scale-105">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={imageMed || imageLow || "https://via.placeholder.com/300x300"} 
            alt={"Thumbnail for " + title}
            fill
            className="object-cover transition-normal scale-125 group-hover:scale-100" />
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