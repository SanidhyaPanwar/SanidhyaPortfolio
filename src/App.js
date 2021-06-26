import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interest';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route exact path="/" >
      <Home />
    </Route>
    <Route path="/home" >
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/interests">
      <Interests />
    </Route>
    <Route exact path="/skills">
      <Skills />
    </Route>
    <Route path="/projects">
      <Projects />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
