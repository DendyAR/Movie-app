import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <Footer />
    </div>
  );
};

export default Home;
