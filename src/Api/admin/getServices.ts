import axios from "axios";

export const AllUsers = async () => {
  return await axios.get("http://localhost:8000/users/");
};
// export const AllUsers = async () => {
//   const res = await fetch("http://localhost:8000/users/").then((response) =>
//     response.json()
//   );

//   if (!res.success) {
//     throw new Error("Something went wrong");
//   }
//   return res;
// };
