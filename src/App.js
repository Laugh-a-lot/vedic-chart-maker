import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [prediction, setPrediction] = useState({})
  const [isLoading, setLoading] = useState(false)
  var str = require("./chartMaker")
  useEffect(() => {

    var params = {
      dob: "04/11/2001",
      tob: "07:30",
      lat: 11.27,
      lon: 78.27,
      tz: 5.5,
      div: "D9",
      api_key: "7f150b2e-c3e2-51fb-b216-8d8bba2f91bc",
    };
    const fetchData = async () => {
      const result = await axios(
        'https://api.vedicastroapi.com/json/horoscope/divisionalcharts', { params: params }
      );
      console.log(result.data.response)
      setPrediction(result.data.response);
      setLoading(true)
    }
    fetchData()}
      ,[]);
  
  return (
    <div className="App">
      
        {console.log(prediction, "ptrresxd")}
        
      <img src={`data:image/svg+xml;utf8,${isLoading ? str(prediction, "north", "blue") : ''}`} />
        
     
    </div>
  );
}

export default App;
