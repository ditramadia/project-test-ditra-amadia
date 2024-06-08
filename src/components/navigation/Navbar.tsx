import { useEffect, useState } from "react";
import Image from "next/image";

import SuitMediaLogo from "@public/images/logo-suitmedia.png";

import NavListSmall from "@components/navigation/NavListSmall";
import NavListLarge from "@components/navigation/NavListLarge";

interface NavbarProps {
  active: string
};

const Navbar = (props: NavbarProps) => {
  const { active } = props;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY])

  return (
    <nav className={`fixed z-50 inset-x-0 top-0 w-full h-fit bg-primary-500 transition-fast lg:py-3 ${lastScrollY === 0 ? 'lg:bg-primary-500' : isVisible ? 'lg:bg-primary-500/60 lg:hover:bg-primary-500' : 'lg:bg-primary-500/0 lg:-translate-y-full lg:pointer-events-none'}`}>
      <div className="screen-container py-2 flex justify-between items-center">

        <div className="relative z-50">
          <Image src={SuitMediaLogo} alt="Suit Media Logo" width={140} priority />
        </div>

        <NavListSmall active={active} />

        <NavListLarge active={active} />

      </div>
    </nav>
  );
};

export default Navbar;