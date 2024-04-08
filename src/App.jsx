// App.js
import React from "react";
import Header from "./components/Header";
import AdminManagement from "./components/AdminManagement";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className=" relative">
      <Header />
      <SubHeader></SubHeader>
      <div className=" fixed cursor-pointer -rotate-90 rounded-lg shado shadow-2xl shadow-gray-800 z-100 bg-white  py-3  px-4 right-[-25px] top-1/2">
        Feedback
      </div>
    </div>
  );
}

export default App;
