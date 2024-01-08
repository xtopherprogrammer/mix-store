import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

// this should always have same name as the name of the file for best practice
function HomPageContainer() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Footer />
    </>
  );
}

export default HomPageContainer;
