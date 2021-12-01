import "./App.css";

function App() {
  async function getData() {
    const response = await fetch("http://localhost:98/api/types/1")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return response;
  }

  async function displayData() {
    const data = await getData().resolve();

    console.log(data.name);
    return data.name;
  }

  const DATABLET = displayData();
  console.log(DATABLET);

  return <div className="App"></div>;
}

export default App;
