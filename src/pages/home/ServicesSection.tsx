import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services that we provide </h1>
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
