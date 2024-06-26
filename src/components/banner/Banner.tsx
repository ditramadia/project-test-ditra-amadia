import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const [bannerImage, setBannerImage] = useState<string>('');

  useEffect(() => {
    // Fetch banner image here
    const fetchBannerImage = () => {
      setBannerImage('https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    }

    fetchBannerImage();
  }, [])

  return (
    <div 
      ref={ref} 
      className="relative w-full h-[420px] lg:h-[560px]"
    >
      <motion.div 
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat transform skew-y-[-12deg] origin-top-left lg:skew-y-[-6deg]" 
        style={{backgroundImage: "url('"+bannerImage+")", backgroundPositionY: imageY}} 
      >
        <div className="absolute inset-0 bg-scrim/70" />
      </motion.div>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1 className="heading-1 text-neutral-100 tracking-widest">Ideas</h1>
        <h2 className="heading-5 text-neutral-100">Where all our great things begin</h2>
      </div>
    </div>
  );
};

export default Banner;