import Container from "@/components/ui/Container";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AllUsers from "@/Api/AllUsers";
import MeetOurTeam from "./MeetOurTeam";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <ServicesSection />
      {/* <AllUsers /> */}
      <MeetOurTeam />
    </Container>
  );
};

export default Home;
