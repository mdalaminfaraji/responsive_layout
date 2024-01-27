import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import Container from "@/components/ui/Container";
import { Variants, motion } from "framer-motion";
import "./style.css";
// import { useRef } from "react";
// import { useFollowPointer } from "./useFollowPointer";
// const variants: Variants = {
//   leftRight: {
//     x: [-20, 20],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "mirror",
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//   },
//   scale: {
//     scale: [1, 1.1],
//     transition: {
//       scale: {
//         repeat: Infinity,
//         repeatType: "mirror",
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//   },
//   rotate: {
//     rotate: [0, 360],
//     transition: {
//       rotate: {
//         repeat: Infinity,
//         repeatType: "mirror",
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//   },
// };
const variants: Variants = {
  active: {
    backgroundColor: "#f00",
  },
  inactive: {
    backgroundColor: "#fff",
    transition: { duration: 2 },
  },
};

const ServicesSection = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  return (
    <Container className="my-40">
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}
      <div className="text-center flex flex-col justify-between items-center">
        <motion.h1 variants={variants} animate="active">
          Services that we provide
        </motion.h1>
        <motion.div
          className="h-20 w-20 bg-red-900 mt-5"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
        ></motion.div>
        <p className="max-w-[80ch] mt-10 mb-20">
          All Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          corporis incidunt neque Quis provident quibusdam aliquid asperiores,
          voluptatibus minima dignissimos totam. Excepturi!
        </p>
      </div>

      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement />
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-7"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
