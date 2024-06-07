import navigation from "@data/navigation";

import NavItemLarge from "@components/navigation/NavItemLarge";

interface NavListLargeProps {
  active: string
};

const NavListLarge = (props: NavListLargeProps) => {
  const { active } = props;
  
  return (
    <div className="hidden lg:flex gap-8">
      {
        navigation.map((item, index) => (
          <NavItemLarge key={index} title={item.title} link={item.link} active={item.title === active}/>
        ))
      }
    </div>
  );
};

export default NavListLarge;