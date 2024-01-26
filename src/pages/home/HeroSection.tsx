import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import macbook from "@/assets/macbook.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 3 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,

    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-[calc(100vh-64px)] grid-cols-1 grid lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className=" text-5xl lg:text-8xl font-bold text-nowrap"
          >
            <span className="text-gray">Don't worry</span>
            <br />
            <span>We'll fix it</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark-grey max-w-[50ch] mt-10 text-lg"
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            , Your one-step place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="w-3/4 lg:w-full mx-auto"
        >
          <img className=" h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
