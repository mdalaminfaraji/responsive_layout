import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import a from "@/assets/a.png";
import b from "@/assets/b.png";
import c from "@/assets/c.png";
import "./style.css";
import { useState } from "react";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.5, x: "-100" },
};
const MeetOurTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <h1 className="text-center mb-10">Meet our Team</h1>
      <p className="text-center mb-10">
        All our technicians are fully qualified and licensed. Moreover, theyare
        incredibly skillful and <br />
        proficient in various aspects of computer repair.
      </p>

      <div className="grid grid-cols-12 gap-[20px] mb-10 ">
        <div className="col-span-6 lg:col-span-3 container1">
          <img
            src={a}
            alt="Men Image"
            className="image "
            style={{ width: "100%" }}
          />
          <div className="middle">
            <div className="text">Johan Doe</div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3 relative group">
          <img
            src={b}
            alt="Men Image"
            className="opacity-100 block w-full h-auto transition duration-500 ease-in-out backface-hidden group-hover:opacity-30"
          />
          <div className="transition duration-500 ease-in-out opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center group-hover:opacity-100">
            <div className="bg-green-500 text-white text-base px-8 py-4">
              Johan Doe
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.5 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          className="col-span-6 lg:col-span-3"
        >
          <img src={c} alt="Men Image" />
          <motion.div>
            <div>Rahim udden</div>
          </motion.div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          className="col-span-6 lg:col-span-3"
        >
          <img src={a} alt="Men Image" />
          <motion.div>some</motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default MeetOurTeam;
