import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Navbar from "../Navbar/Navbar";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Navbar/>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
