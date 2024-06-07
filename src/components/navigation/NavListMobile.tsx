import { useState } from "react";

import navigation from "@data/navigation";

import NavItemMobile from "@components/navigation/NavItemMobile";

interface NavbarProps {
  active: string
};

const NavListMobile = (props: NavbarProps) => {
  const { active } = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="lg:hidden">
      <div className="relative z-20 w-[36px] h-[28px] flex flex-col justify-between lg:hidden" onClick={handleToggleOpen}>
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && 'rotate-45 translate-y-[12px]'}`} />
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && 'scale-0 opacity-0'}`} />
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && '-rotate-45 -translate-y-[12px]'}`} />
      </div>

      <div
        className={`fixed z-10 inset-0 bg-primary-500 flex flex-col justify-center items-center transition-fast ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={() => setIsOpen(false)}
      >
        {
          navigation.map((item, index) => (
            <NavItemMobile key={index} title={item.title} link={item.link} active={item.title === active} />
          ))
        }
      </div>
    </div>
  );
};

export default NavListMobile;