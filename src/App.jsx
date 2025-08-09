import './App.css';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import MainProjects from './components/MainProjects';
import Navbar from './components/Navbar';
import OtherProjects from './components/OtherProjects';


function App() {


  return (
    <>
      <Navbar />
      <IntroSection />
      <MainProjects />
      <OtherProjects />
      <ContactSection />
    </>
  );
};

export default App;
