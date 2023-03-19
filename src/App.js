import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  const personalDetails = {
    name: "Hoger Shoresh",
    location: "London, UK",
    tagline: "I'm a Frontend Developer!",
    email: "hogga1@gmail.com",
    brand: "I'm extremely creative with an eye for detail, matched with my technical expertise I make sure I deliver the highest quality to clients.",
  };

  return (
    <>
      <Header />
      <Router personalDetails={personalDetails} />
    </>
  );
}

export default App;
