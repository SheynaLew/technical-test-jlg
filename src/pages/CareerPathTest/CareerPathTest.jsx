import Header from "../../templates/Header/Header";
import backgroundImage from "../../assets/images/discover-journey-maze.svg";

export default function CareerPathTest() {
  return (
    <>
      <Header
        title="Career path test"
        text="Discover careers that match your skills and personality"
        backgroundImage={backgroundImage}
      />
    </>
  );
}
