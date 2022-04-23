import './App.css';

import Header from "./components/Header";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
import ProjectList from './components/Projects';
import Resume from './components/Resume';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Navigation/>
      </Header>
      <Routes>
        {/* <Route exact path="/" render={() => <Navigate to="/about" />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<ProjectList />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
