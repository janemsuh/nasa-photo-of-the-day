import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Date from "./components/Date/Date";
import Content from "./components/Content/Content";

function App() {
  const api_key = 'hxYnJbxzE82AMbBqytXLQ02bsv7l13K1snWbinJl';
  const [data, setData] = useState({});
  useEffect(() => {
    Axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
        document.body.style.background = `url("${res.data.url}")`;
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Date date={data.date} />
      <Content copyright={data.copyright} title={data.title} explanation={data.explanation} />
    </div>
  );
}

export default App;
