import Container from "@/components/ui/Container";
import a from "@/assets/a.png";
import b from "@/assets/b.png";
import c from "@/assets/c.png";
import "./style.css";
const MeetOurTeam = () => {
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
        <div className="col-span-6 lg:col-span-3">
          <img src={b} alt="Men Image" />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <img src={c} alt="Men Image" />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <img src={a} alt="Men Image" />
        </div>
      </div>
    </Container>
  );
};

export default MeetOurTeam;
