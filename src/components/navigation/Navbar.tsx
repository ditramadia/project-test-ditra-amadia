import Image from "next/image";

import SuitMediaLogo from "@public/images/logo-suitmedia.png";

import NavListSmall from "@components/navigation/NavListSmall";
import NavListLarge from "@components/navigation/NavListLarge";

interface NavbarProps {
  active: string
};

const Navbar = (props: NavbarProps) => {
  const { active } = props;

  return (
    <nav className="fixed z-50 inset-x-0 top-0 w-full h-fit bg-primary-500">
      <div className="screen-container py-2 flex justify-between items-center">

        <div className="relative z-50">
          <Image src={SuitMediaLogo} alt="Suit Media Logo" width={140} />
        </div>

        <NavListSmall active={active} />

        <NavListLarge active={active} />

      </div>
    </nav>
  );
};

export default Navbar;