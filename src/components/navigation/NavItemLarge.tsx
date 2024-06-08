import Link from "next/link";

interface NavItemLargeProps {
  title: string,
  link: string,
  active?: boolean
};

const NavItemLarge = (props: NavItemLargeProps) => {
  const { title, link, active } = props;

  return (
    <Link href={link}>
      <div className="relative group">
        <span className='body-md text-neutral-100'>{title}</span>
        <div className={`absolute -bottom-2 ${active ? 'w-full' : 'w-[0]'} h-[4px] bg-neutral-100 transition-fast group-hover:w-full`} />
      </div>
    </Link>
  );
};

export default NavItemLarge;