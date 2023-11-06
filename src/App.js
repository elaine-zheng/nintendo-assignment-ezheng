
import './Styles/App.css';
import SideBar from "./Components/SideBar";
import React, { useState } from "react";
import Section1Page from './SectionPages/Section1Page';
import Section2Page from './SectionPages/Section2Page';
import Section3Page from './SectionPages/Section3Page';
import SearchBar from "./Components/SearchBar";

function App() {
  const [show, setShow] = useState('section1');
  const showSection = (section) => {
    setShow(section);
  };

  return (
    <div className="App">
        <SideBar isOpen={true} showSection={showSection} show={show}/>
        <SearchBar />
        {show === 'section1' && <Section1Page />}
        {show === 'section2' && <Section2Page />}
        {show === 'section3' && <Section3Page />}
    </div>
  );
}

export default App;
