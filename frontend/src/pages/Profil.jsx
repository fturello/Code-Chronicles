import React from "react";
import SideBar from "../components/SideBar";
import Searching from "../components/Searching";
import Activity from "../components/Activity";
import FriendsCompo from "../components/FriendsCompo";

function About() {
  return (
    <div>
      <Searching />
      <SideBar />
      <Activity />
      <FriendsCompo />
    </div>
  );
}

export default About;
