import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
