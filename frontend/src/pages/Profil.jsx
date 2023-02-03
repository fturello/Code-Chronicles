import React from "react";
import SideBar from "../components/SideBar";
import Searching from "../components/Searching";
import Activity from "../components/Activity";
import Friends from "../components/Friends";
function About() {
  return (
    <div>
      <Searching />
      <br></br>
      <SideBar />
      <br></br>
      <Activity />
      <br></br>
      <Friends />
    </div>
  );
}

export default About;
