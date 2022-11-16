import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nationalize, setNationalize] = useState(null);

  const fetchNationality = () => {
    Axios.get(`https://api.nationalize.io/?name=${name}`).then((res) => {
      setNationalize(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="type"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchNationality}>Nationalize</button>
      <p> hey: {nationalize?.country[0]}</p>
      <p></p>
      <p></p>
    </div>
  );
}

export default App;
