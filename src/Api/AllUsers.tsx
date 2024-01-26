import { useEffect } from "react";

const AllUsers = () => {
  useEffect(() => {
    fetch("http://localhost:8000/users/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div>AllUsers</div>;
};

export default AllUsers;
