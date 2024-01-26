import { AllUsers } from "@/Api/admin/getServices";
import { useQuery } from "@tanstack/react-query";

const AddService = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: AllUsers,
  });
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }
  return <div>AddService</div>;
};

export default AddService;
