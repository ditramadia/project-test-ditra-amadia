import { useState } from "react";

const NavListMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <div className="w-[36px] h-[28px] flex flex-col justify-between lg:hidden" onClick={handleToggleOpen}>
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && 'rotate-45 translate-y-[12px]'}`} />
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && 'scale-0 opacity-0'}`} />
        <div className={`w-full h-[4px] bg-neutral-100 rounded-full transition-fast ${isOpen && '-rotate-45 -translate-y-[12px]'}`} />
      </div>
    </div>
  );
};

export default NavListMobile;