import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    const data = await response.data

    setQuote(data.content);
    setAuthor(data.author);
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container text-center" style={{ fontFamily: "Edu TAS Beginner" }}>
      <div className="row vh-100">
        <h1 className="text-white fw-bold align-self-center">Random Quotes</h1>
        <div className="col-md ">
          <div className=" p-5 rounded  h-auto w-auto text-white" >
            <h2>"{quote}"</h2>
            <h3>- {author}</h3>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col">
            <button type="button" className="btn text-white fs-3" onClick={getQuote}>Get Another Quote</button>
          </div>
        </div>
      </div>

    </div>


  );
}

export default App;
