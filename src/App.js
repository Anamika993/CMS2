// App.js
import "./App.css";
import React, { useState } from "react";
import ContactImport from "./components/ContactI";
import ContactList from "./components/ContactL";

const App = () => {
  const [filter, setFilter] = useState({
    name: "",
    date: "",
    countryCode: "",
    phoneNumber: "",
  });

  return (
    <div>
      <h1 className="containerHeading">Contact Management App</h1>
      <ContactImport filter={filter} setFilter={setFilter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default App;
