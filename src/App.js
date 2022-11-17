import "./App.css";
import "./index.css"
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
    <div className="App" >
      <div className="container-image">
        <div className="national-input">
      <input
        placeholder="Enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchNationality}>Nationalize</button>
      </div>
      <div className="card-container">
        {nationalize.map((nation, index) => {
          return(
            <div className="card" key={index}>
              <p>Country's ID: {nation.country_id}</p>
              <p>Probability: {nation.probability}</p>
            </div>
          )
        })}
      </div>
      <p></p>
    </div>
    </div>
  );
}

export default App;
