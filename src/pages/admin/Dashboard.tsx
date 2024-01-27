// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "../home/style.css";
// interface Position {
//   x: number;
//   y: number;
// }

// export const useFollowPointer = (): Position => {
//   const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

//   useEffect(() => {
//     const updatePosition = (e: MouseEvent) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", updatePosition);

//     return () => {
//       window.removeEventListener("mousemove", updatePosition);
//     };
//   }, []);

//   return position;
// };

const Dashboard = () => {
  // const { x, y } = useFollowPointer();

  return (
    <div className="container">
      some
      {/* <motion.div
        className="box"
        style={{ x, y }}
        transition={{ type: "spring", damping: 3, stiffness: 50 }}
      /> */}
    </div>
  );
};

export default Dashboard;
