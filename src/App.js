import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Post from "./components/Post";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:post_id" component={Post} />
        </div>
    </BrowserRouter>
  );
}

export default App;
