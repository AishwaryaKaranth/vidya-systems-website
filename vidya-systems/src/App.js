import Home from "./components/Home/Home";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import {LinkContainer} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    </div>
  );
}

export default App;
