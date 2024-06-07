import Link from "next/link";

interface NavItemSmallProps {
  title: string,
  link: string,
  active?: boolean
};

const NavItemSmall = (props: NavItemSmallProps) => {
  const { title, link, active } = props;

  return (
    <Link href={link} className='w-full group '>
      <div className={`w-full py-3 text-center ${active && 'bg-neutral-100'} transition-fast group-hover:bg-neutral-100`}>
        <span className={`heading-1 ${active ? 'text-primary-500' : 'text-neutral-100 group-hover:text-primary-500'}`}>{title}</span>
      </div>
    </Link>
  );
};

export default NavItemSmall;