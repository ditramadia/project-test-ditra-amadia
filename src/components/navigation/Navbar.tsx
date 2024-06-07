import Image from "next/image";

import SuitMediaLogo from "@public/images/logo-suitmedia.png";

const navigation = [
  {
    title: "Work",
    link: "/work"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Ideas",
    link: "/ideas"
  },
  {
    title: "Careers",
    link: "/careers"
  },
  {
    title: "Contact",
    link: "/contact"
  }
];

const Navbar = () => {
  return (
    <nav className="w-full h-fit bg-primary-500">
      <div className="screen-container py-2 flex justify-between items-center">

        <div>
          <Image src={SuitMediaLogo} alt="Suit Media Logo" width={140} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-[36px] h-[4px] bg-neutral-100 rounded-full" />
          <div className="w-[36px] h-[4px] bg-neutral-100 rounded-full" />
          <div className="w-[36px] h-[4px] bg-neutral-100 rounded-full" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;