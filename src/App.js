import './App.css';
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import InfoOne from "./components/InfoOne";
import Cards from "./components/Cards";
import About from "./components/About";
import Explore from "./components/Explore";
import Booking from "./components/Booking";
import SocialMedia from './components/Socialmedia';
import SimpleSlider from "./components/SimpleSlider";
import Footer from "./components/Footer";
import FooterFinal from "./components/FooterFinal";
import Cookie from "./components/Cookie";
import CookieConsent from "react-cookie-consent";
import Social from "./components/Social";


function App() {
 
  return (
    <div className="App">
      <CookieConsent
          // onAccept={() => {
          //   alert("yay!");
          // }}
          debug={true}
          enableDeclineButton
          declineButtonText="Decline (optional)"
          // onDecline={() => {
          //   alert("nay!");
          // }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            Isla Escondida Enterprises &#8482;&#174;
          </span>
        </CookieConsent>
     <Navbar />
     <Video />

     <Cookie />
     <InfoOne />
     <Cards />
     <About />
     <Explore />
     <Booking />
     <SocialMedia/>
     <SimpleSlider/>
     <Footer />
    <FooterFinal />
    <Social />
    </div>
  );
}

export default App;
