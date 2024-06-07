import Link from "next/link";

interface NavItemMobileProps {
  title: string,
  link: string,
  active?: boolean
};

const NavItemMobile = (props: NavItemMobileProps) => {
  const { title, link, active } = props;

  return (
    <Link href={link} className={`w-full ${active && 'bg-neutral-100'} group hover:bg-neutral-100`}>
      <div className="w-full py-3 text-center">
        <span className={`heading-1 ${active ? 'text-primary-500' : 'text-neutral-100 group-hover:text-primary-500'}`}>{title}</span>
      </div>
    </Link>
  );
};

export default NavItemMobile;