import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ListTypes from "./ListTypes";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [typesData, setTypesData] = useState({ types: [] });
  const [currentUrl, setCurrentUrl] = useState("http://localhost:98/api");

  useEffect(() => {
    async function fetchData() {
      const repsonse = await fetch("http://localhost:98/api/types");
      const result = await repsonse.json();
      setTypesData({ types: result });
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log(typesData.types[0]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/types"
            element={
              loading ? "Loading..." : <ListTypes typesData={typesData} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
