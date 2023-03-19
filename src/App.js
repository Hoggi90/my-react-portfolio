import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hi, I'm Hoger.",
    location: "London, UK",
    tagline: "I'm a Frontend Developer!",
    email: "hogga1@gmail.com",
    availability: "Open for work",
    brand:
      "I'm extremely creative with an eye for detail, matched with my technical expertise I make sure I deliver the highest quality to clients.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
