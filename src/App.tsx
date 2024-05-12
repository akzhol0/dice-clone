import React from "react";
import "./styles/style.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UknownPage from "./components/pages/UknnownPage/UknownPage";
import MainPage from "./components/pages/main-page/MainPage";
import BrowseEvents from "./components/pages/browse-events-page/BrowseEvents";
import About from "./components/pages/about-page/About";
import Careers from "./components/pages/careers-page/Careers";
import LogIn from "./components/auth/LogIn";
import GetTheApp from "./components/pages/get-app-page/GetTheApp";
import Blog from "./components/pages/blog-page/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/browse-events" element={<BrowseEvents />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/log-in" element={<LogIn />}></Route>
          <Route path="/get-the-app" element={<GetTheApp />}></Route>
          <Route path="*" element={<UknownPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
