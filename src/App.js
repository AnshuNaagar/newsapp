import React from "react";
import Navbar from "./components/Js/Navbar";
import Card from "./components/Js/Card";
import Wallstreet from "./components/Js/Wallstreet";
import Business from "./components/Js/Business";
import "./App.css";
import NotFound from './components/Js/404'
import TechCrunch from './components/Js/TechCrunch'
import UsBusinessHeadLines from './components/Js/US'
import AppleHeadlines from './components/Js/Apple'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forum from './components/Js/Forum'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/business" element={<Business />}/>
          <Route path="/tech-crunch" element={<TechCrunch heading="TechCrunch posts" />}/>
          <Route path="/wallstreet" element={<Wallstreet />}/>
          <Route path="/business-headlines-from-us" element={<UsBusinessHeadLines heading="Top business headlines from us presently" />}/>
          <Route path="/apple-headlines" element={<AppleHeadlines heading="Apple sales articles" />}/>
          <Route path="*" element={<NotFound heading="404 Not Found" description="Your request can't get resolve from the server because your request were not found in our browser... File a report if you lost something precious as soon as possible and we try to fix it as much we can officially." />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
