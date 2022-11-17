import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [nationalize, setNationalize] = useState([]);

  const fetchNationality = () => {
    Axios.get(`https://api.nationalize.io/?name=${name}`).then((res) => {
      let users = res.data
      setNationalize(users.country);
    });
  };

  // const nationality = () =>{
  //   fetch(`https://api.nationalize.io/?name=${name}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setNationalize(data);
  //   });
  // };

  useEffect(() =>{
     fetchNationality();
  }, [])

 

  return (
    <div className="App">
      <input
        placeholder="type"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchNationality}>Nationalize</button>
      
      <div>
        {nationalize.map((nation, index) => {
          return(
            <div key={index}>
              <h2>possibility: {nation.country_id}</h2>
              <h2>possibility: {nation.probability}</h2>
            </div>
          )
        })}
      </div>
      <p></p>
    </div>
  );
}

export default App;
