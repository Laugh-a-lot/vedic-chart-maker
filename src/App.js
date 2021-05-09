import React, { useEffect, useState } from "react";
import axios from 'axios';
import { findByLabelText } from "@testing-library/dom";

function App() {
  const [prediction, setPrediction] = useState({
  0: { name: "As", zodiac: "Gemini", rasi_no: 2, house: 1 },
  1: { name: "Su", zodiac: "Aquarius", rasi_no: 11, house: 9, retro: false },
  2: { name: "Mo", zodiac: "Sagittarius", rasi_no: 9, house: 7, retro: false },
  3: { name: "Ma", zodiac: "Aries", rasi_no: 1, house: 11, retro: false },
  4: { name: "Me", zodiac: "Cancer", rasi_no: 4, house: 2, retro: false },
  5: { name: "Ju", zodiac: "Pisces", rasi_no: 12, house: 10, retro: true },
  6: { name: "Ve", zodiac: "Aries", rasi_no: 1, house: 11, retro: false },
  7: { name: "Sa", zodiac: "Capricorn", rasi_no: 10, house: 8, retro: true },
  8: { name: "Ra", zodiac: "Aries", rasi_no: 1, house: 11, retro: true },
  9: { name: "Ke", zodiac: "Libra", rasi_no: 7, house: 5, retro: true },
  10: { name: "A2", zodiac: "Gemini", rasi_no: 5, house: 9 },
  11: { name: "A3", zodiac: "Gemini", rasi_no: 5, house: 9 },
  12: { name: "A4", zodiac: "Gemini", rasi_no: 5, house: 9 },
  13: { name: "A5", zodiac: "Gemini", rasi_no: 5, house: 9 },
  15: { name: "A7", zodiac: "Gemini", rasi_no: 5, house: 9 },
  16: { name: "A8", zodiac: "Gemini", rasi_no: 5, house: 9 },
  18: { name: "A2", zodiac: "Gemini", rasi_no: 7, house: 9 },
  19: { name: "A3", zodiac: "Gemini", rasi_no: 7, house: 9 },
  20: { name: "A4", zodiac: "Gemini", rasi_no: 7, house: 6 },
  22: { name: "A6", zodiac: "Gemini", rasi_no: 7, house: 12 },
  23: { name: "A7", zodiac: "Gemini", rasi_no: 7, house: 12 },
  24: { name: "A8", zodiac: "Gemini", rasi_no: 7, house: 6 },
  27: { name: "A9", zodiac: "Gemini", rasi_no: 7, house: 6 },
  28: { name: "A1", zodiac: "Gemini", rasi_no: 7, house: 12 },
  //29: { name: "A5", zodiac: "Gemini", rasi_no: 7, house: 8 },
  chart: "D9"
  })
  const [isLoading, setLoading] = useState(true)
  var str = require("./chartMaker")
  // useEffect(() => {

  //   var params = {
  //     dob: "11/03/1994",
  //     tob: "12:30",
  //     lat: 11.27,
  //     lon: 78.27,
  //     tz: 5.5,
  //     div: "D1",
  //     api_key: "7f150b2e-c3e2-51fb-b216-8d8bba2f91bc",
  //   };
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://api.vedicastroapi.com/json/horoscope/divisionalcharts', { params: params }
  //     );
  //     setPrediction(result.data.response);
  //     setLoading(true)
  //   }
  //   fetchData()}
  //     ,[]);
  
  return (
    <div className="App" style={{ display: "flex" }}>
      {console.log(prediction)}
      <img src={`data:image/svg+xml;utf8,${isLoading ? str(prediction, "north", "blue") : ''}`} alt="kundli" />
      <img src={`data:image/svg+xml;utf8,${str(prediction, "south", "blue")}`} alt="kundli"/>
    </div>
  );
}

export default App;
