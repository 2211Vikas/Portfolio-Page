import './App.css';
import Qualifiaction from './Qualification/Qualifiaction';
import About from './components/About/About';
import Certificate from './components/Certificate/Certificate';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Scrollup from './components/Scrollup/Scrollup';
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualifiaction/>
        <Certificate/>
        <Project/>
        <ContactUs/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
