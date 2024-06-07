import { useState } from "react";
import { motion } from "framer-motion";

import navigation from "@data/navigation";

import NavItemSmall from "@components/navigation/NavItemSmall";

interface NavListSmallProps {
  active: string
};

const NavListSmall = (props: NavListSmallProps) => {
  const { active } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="lg:hidden">
      <div className="relative z-20 w-[36px] h-[28px] flex flex-col justify-between cursor-pointer lg:hidden" onClick={handleToggleOpen}>
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
            <motion.div
              key={index}
              className="w-full"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.15, delay: index * 0.06, ease: 'easeInOut'}}
            >
              <NavItemSmall key={index} title={item.title} link={item.link} active={item.title === active} />
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default NavListSmall;