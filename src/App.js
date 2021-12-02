import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ListFetches from "./ListFetches";
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
        {loading ? "Loading..." : <ListFetches typesData={typesData} />}
      </div>
    </>
  );
}

export default App;
