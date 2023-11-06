import React from "react";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const showSection = props.showSection;
  const show = props.show;

  return (
    <div className={sidebarClass}>
      <button onClick={() => showSection('section1')} className={show === 'section1' ? 'active-button' : ''}> Section 1 </button>
      <button onClick={() => showSection('section2')} className={show === 'section2' ? 'active-button' : ''}> Section 2 </button>
      <button onClick={() => showSection('section3')} className={show === 'section3' ? 'active-button' : ''}> Section 3 </button>
    </div>
  );
};
export default SideBar;
