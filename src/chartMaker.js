module.exports = (newjson, style, color) => {
  var house = [[], [], [], [], [], [], [], [], [], [], [], []],
    rasi = [[], [], [], [], [], [], [], [], [], [], [], []],
    rasi_no = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    new_rasi_no = [];
  var svgStringHouse = "";
  var svgStringRasi = "";

  // Location for printing each of the houses in the SVG
  var houseAddresses = [
      [
        [125, 125], // House 1
        [125 + (250 * 50) / 100, (250 * 25) / 100], // first element is the origin
        [125 + (250 * 50) / 100, (250 * 75) / 100], // rest elements are cordinates of elements from 4 to 9
        [125 + (250 * 37.5) / 100, (250 * 62.5) / 100],
        [125 + (250 * 62.5) / 100, (250 * 62.5) / 100],
        [125 + (250 * 37.5) / 100, (250 * 37.5) / 100],
        [125 + (250 * 62.5) / 100, (250 * 37.5) / 100],
      ],
      [
        [15, 0],
        [250 / 2, 85],
        [250 / 2, 20],
        [250 / 3, 20],
        [(250 * 4) / 6, 20],
        [250 / 6, 20],
        [(250 * 5) / 6, 20],
      ],
      [
        [125, 125],
        [125 - ((125 * 75) / 100) * 1.1, 125 - 250 / 6], // House 3
        [125 - ((125 * 75) / 100) * 1.1, 125 + 250 / 6], // first element is the origin
        [125 - ((125 * 50) / 100) * 1.1, 125 - 250 / 6], // rest elements are cordinates of elements from 4 to 9
        [125 - ((125 * 50) / 100) * 1.1, 125 + 250 / 6],
        [125 - ((125 * 75) / 100) * 1.1, 125 + 250 / 3],
        [125 - ((125 * 75) / 100) * 1.1, 125 - 250 / 3],
      ],
      [
        [0, 250],
        [(250 * 50) / 100, 125 + (250 * 25) / 100], // House 4
        [(250 * 50) / 100, 125 + (250 * 75) / 100], // first element is the origin
        [(250 * 37.5) / 100, 125 + (250 * 62.5) / 100], // rest elements are cordinates of elements from 4 to 9
        [(250 * 62.5) / 100, 125 + (250 * 62.5) / 100],
        [(250 * 37.5) / 100, 125 + (250 * 37.5) / 100],
        [(250 * 62.5) / 100, 125 + (250 * 37.5) / 100],
      ],

      [
        [125, 375],
        [125 - ((125 * 75) / 100) * 1.1, 375 - 250 / 6], // House 5
        [125 - ((125 * 75) / 100) * 1.1, 375 + 250 / 6], // first element is the origin
        [125 - ((125 * 50) / 100) * 1.1, 375 - 250 / 6], // rest elements are cordinates of elements from 4 to 9
        [125 - ((125 * 50) / 100) * 1.1, 375 + 250 / 6],
        [125 - ((125 * 75) / 100) * 1.1, 375 + 250 / 3],
        [125 - ((125 * 75) / 100) * 1.1, 375 - 250 / 3],
      ],
      [
        [15, 500],
        [250 / 2, 500 - 85],
        [250 / 2, 500 - 20],
        [250 / 3, 500 - 20],
        [(250 * 4) / 6, 500 - 20],
        [250 / 6, 500 - 20],
        [(250 * 5) / 6, 500 - 20],
      ],
      [
        [125, 375],
        [125 + (250 * 50) / 100, 250 + (250 * 25) / 100], // House 7
        [125 + (250 * 50) / 100, 250 + (250 * 75) / 100], // first element is the origin
        [125 + (250 * 37.5) / 100, 250 + (250 * 62.5) / 100], // rest elements are cordinates of elements from 4 to 9
        [125 + (250 * 62.5) / 100, 250 + (250 * 62.5) / 100],
        [125 + (250 * 37.5) / 100, 250 + (250 * 37.5) / 100],
        [125 + (250 * 62.5) / 100, 250 + (250 * 37.5) / 100],
      ],
      [
        [265, 500],
        [250 + 250 / 2, 500 - 85],
        [250 + 250 / 2, 500 - 20],
        [250 + 250 / 3, 500 - 20],
        [250 + (250 * 4) / 6, 500 - 20],
        [250 + 250 / 6, 500 - 20],
        [250 + (250 * 5) / 6, 500 - 20],
      ],
      [
        [375, 375],
        [375 + ((125 * 75) / 100) * 1.1, 375 - 250 / 6], // House 9
        [375 + ((125 * 75) / 100) * 1.1, 375 + 250 / 6], // first element is the origin
        [375 + ((125 * 50) / 100) * 1.1, 375 - 250 / 6], // rest elements are cordinates of elements from 4 to 9
        [375 + ((125 * 50) / 100) * 1.1, 375 + 250 / 6],
        [375 + ((125 * 75) / 100) * 1.1, 375 + 250 / 3],
        [375 + ((125 * 75) / 100) * 1.1, 375 - 250 / 3],
      ],
      [
        [250, 250],
        [250 + (250 * 50) / 100, 125 + (250 * 25) / 100], // House 10
        [250 + (250 * 50) / 100, 125 + (250 * 75) / 100], // first element is the origin
        [250 + (250 * 37.5) / 100, 125 + (250 * 62.5) / 100], // rest elements are cordinates of elements from 4 to 9
        [250 + (250 * 62.5) / 100, 125 + (250 * 62.5) / 100],
        [250 + (250 * 37.5) / 100, 125 + (250 * 37.5) / 100],
        [250 + (250 * 62.5) / 100, 125 + (250 * 37.5) / 100],
      ],
      [
        [375, 125],
        [375 + ((125 * 75) / 100) * 1.1, 125 - 250 / 6], // House 11
        [375 + ((125 * 75) / 100) * 1.1, 125 + 250 / 6], // first element is the origin
        [375 + ((125 * 50) / 100) * 1.1, 125 - 250 / 6], // rest elements are cordinates of elements from 4 to 9
        [375 + ((125 * 50) / 100) * 1.1, 125 + 250 / 6],
        [375 + ((125 * 75) / 100) * 1.1, 125 + 250 / 3],
        [375 + ((125 * 75) / 100) * 1.1, 125 - 250 / 3],
      ],
      [
        [265, 0],
        [250 + 250 / 2, 80],
        [250 + 250 / 2, 20],
        [250 + 250 / 3, 20],
        [250 + (250 * 4) / 6, 20],
        [250 + 250 / 6, 20],
        [250 + (250 * 5) / 6, 20],
      ],
    ],
    rasiAddresses = [
      [125, 0],
      [250, 0],
      [375, 0],
      [375, 125],
      [375, 250],
      [375, 375],         // Origins for each rasi address(upper left corner of each square)
      [250, 375],
      [125, 375],
      [0, 375],
      [0, 250],
      [0, 125],
      [0, 0],
    ];
    var themeColor = "rgb(0, 0, 0)";

    switch (color) {
      case "blue":
        themeColor = "rgb(0, 164, 255)";
        break;
      case "dark_blue":
        themeColor = "rgb(0, 42, 138)";
        break;
      case "yellow":
        themeColor = "rgb(255, 214, 12)";
        break;
      case "green":
        themeColor = "rgb(39, 220, 28)";
        break;
      case "dark_green":
        themeColor = "rgb(8, 134, 70)";
        break;
      case "brown":
        themeColor = "rgb(121, 68, 13)";
        break;
  
      case "orange":
        themeColor = "rgb(255, 144, 29)";
        break;
      case "grey":
        themeColor = "rgb(126, 136, 150)";
        break;
      case "red":
        themeColor = "rgb(255, 117, 117)";
        break;
  
      default:
        themeColor = "rgb(0, 0, 0)";
        break;
    }
  var startRasi = newjson[0].rasi_no;
  console.log();
  rasi_no.forEach((ele, index) => {
    if (index + startRasi > 12) {
      new_rasi_no.push((index + startRasi) % 12);
    } else {
      new_rasi_no.push(index + startRasi);
    }
  });

  for (var key in newjson) {
    if (!isNaN(key)) {
      if (key != 8 && key != 9 && newjson[key].retro == true) {
        // console.log("retro",newjson[key].rasi_no)

        house[newjson[key].house - 1].push(`${newjson[key].name}(R)`);
        rasi[newjson[key].rasi_no - 1].push(`${newjson[key].name}(R)`);
      } else {
        // console.log("Whyyy",newjson[key].rasi_no)

        house[newjson[key].house - 1].push(newjson[key].name);
        rasi[newjson[key].rasi_no - 1].push(newjson[key].name);
      }
    }
  }

  house.forEach((element, ind) => {
    // there are 5 types of houses: full square(1, 4, 7, 10), upper triangle(6, 9), lower triangle(2, 12), right triangle(3, 5), left triangle(11, 8)

    element.forEach((houseelem, Hindex) => {
      // for dynamic positions
      if (Hindex < 3) {
        if (ind == 0 || ind == 3 || ind == 6 || ind == 9) {
          // for whole square house
          svgStringHouse =
            svgStringHouse +
            `<text x="${
              houseAddresses[ind][0][0] +
              (250 / (element.length < 4 ? element.length + 1 : 4)) *
                (Hindex + 1 < 4 ? Hindex + 1 : 2) -
              10
            }" y= "${
              houseAddresses[ind][0][1] + 5
            }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;font-size: 14px;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
        } else if (ind == 2 || ind == 4 || ind == 8 || ind == 10) {
          //for left and right triangles
          svgStringHouse =
            svgStringHouse +
            `<text x="${
              houseAddresses[ind][0][0] +
              (125 / (element.length < 4 ? element.length + 1 : 4)) *
                (Hindex + 1 < 4 ? Hindex + 1 : 2) *
                (ind < 5 ? -1.1 : 1.1) -
              10
            }" y= "${
              houseAddresses[ind][0][1] + 5
            }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;font-size: 14px;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
        } else {
          //for top and bottom triangles
          svgStringHouse =
            svgStringHouse +
            `<text x="${
              houseAddresses[ind][0][0] +
              (220 / (element.length < 4 ? element.length + 1 : 4)) *
                (Hindex + 1 < 4 ? Hindex + 1 : 2) -
              10
            }" y= "${
              houseAddresses[ind][0][1] +
              (125 * (ind == 1 || ind == 11 ? 1 : -0.75)) / 2.2 - 5
            }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;font-weight:bold ">${houseelem}</text>`;
        }
      }
      // for fixed positions
      else {
        svgStringHouse =
          svgStringHouse +
          `<text x="${houseAddresses[ind][Hindex - 2][0] - 10}" y= "${
            houseAddresses[ind][Hindex - 2][1] + 5
          }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
      }
    });
  });



var astrological_sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio","Sagittarius", "Capricorn", "Aquarius", "Pisces"]

  rasi.forEach((element, ind) => {
    element.forEach((houseelem, Hindex) => {
      let isBold = false;
      if (houseelem === "As") {
        isBold = true;
        svgStringRasi =
        svgStringRasi + ` <line x1="${rasiAddresses[ind][0] + 25}" y1="${rasiAddresses[ind][1] + 3}" x2="${rasiAddresses[ind][0]}" y2="${rasiAddresses[ind][1] + 25}" style="stroke:${themeColor};stroke-width:3" />`
      };
      if (Hindex < 5) {
        svgStringRasi =
          svgStringRasi +
          `<text x="${rasiAddresses[ind][0] + (125 / (element.length < 4 ? element.length + 1 : 4)) *(Hindex < 3 ? Hindex + 1 : 2) - 10
          }" y= "${ rasiAddresses[ind][1] +(125 * (Hindex > 2 ? Hindex - 2.5 : 1)) / 2 
          }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size:14px;${
            isBold ? ";font-weight:bold" : ""
          } ">${houseelem}</text>`;
      } else {
        svgStringRasi = svgStringRasi + `<text x="${
            rasiAddresses[ind][0] + 125 * (Hindex % 2 == 1 ? 0.25 : 0.75) - 10
          }" y= "${ rasiAddresses[ind][1] + 125 * (Hindex < 7 ? 0.25 : 0.75)
          }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size:14px;${
            isBold ? ";font-weight:bold" : ""
          } ">${houseelem}</text>`;
      }
    });


    svgStringRasi =
    svgStringRasi +
    `<text x="${rasiAddresses[ind][0] + 62.5 - (astrological_sign[ind].length)*3}" y= "${ rasiAddresses[ind][1] + 115}" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size:13px;opacity: 0.4;font-weight:bold;} ">${astrological_sign[ind]}</text>`;

  });



  if (style == "south") {
    var str = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
     
    <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="0" x2="3" y2="500" style="stroke:${themeColor};stroke-width:3" />
            <line x1="125" y1="0" x2="125" y2="500" style="stroke:${themeColor};stroke-width:3" />
            <line x1="0" y1="497" x2="500" y2="497" style="stroke:${themeColor};stroke-width:3" />
            <line x1="375" y1="500" x2="375" y2="0" style="stroke:${themeColor};stroke-width:3" />
            <line x1="497" y1="500" x2="497" y2="0" style="stroke:${themeColor};stroke-width:3" />
            <line x1="0" y1="3" x2="500" y2="3" style="stroke:${themeColor};stroke-width:3" />
            <line x1="0" y1="125" x2="500" y2="125" style="stroke:${themeColor};stroke-width:3" />
            <line x1="0" y1="375" x2="500" y2="375" style="stroke:${themeColor};stroke-width:3" />
            <line x1="0" y1="250" x2="125" y2="250" style="stroke:${themeColor};stroke-width:3" />
            <line x1="375" y1="250" x2="500" y2="250" style="stroke:${themeColor};stroke-width:3" />
            <line x1="250" y1="0" x2="250" y2="125" style="stroke:${themeColor};stroke-width:3" />
            <line x1="250" y1="375" x2="250" y2="500" style="stroke:${themeColor};stroke-width:3" />
            ${svgStringRasi}
       
            </svg>
 `;
  } else {
    var str = `<?xml version="1.0" encoding="iso-8859-1"?>
 <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
 <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
 <svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="500" y2="500" style="stroke:${themeColor};stroke-width:3" />
      <line x1="500" y1="0" x2="0" y2="500" style="stroke:${themeColor};stroke-width:3" />
      <line x1="3" y1="0" x2="3" y2="500" style="stroke:${themeColor};stroke-width:3" />
      <line x1="0" y1="497" x2="500" y2="497" style="stroke:${themeColor};stroke-width:3" />
      <line x1="497" y1="500" x2="497" y2="0" style="stroke:${themeColor};stroke-width:3" />
  
          <line x1="0" y1="3" x2="500" y2="3" style="stroke:${themeColor};stroke-width:3" />
          <line x1="250" y1="0" x2="0" y2="250" style="stroke:${themeColor};stroke-width:3" />
          <line x1="250" y1="0" x2="500" y2="250" style="stroke:${themeColor};stroke-width:3" />
          <line x1="250" y1="500" x2="500" y2="250" style="stroke:${themeColor};stroke-width:3" />
          <line x1="250" y1="500" x2="0" y2="250" style="stroke:${themeColor};stroke-width:3" />





          ${svgStringHouse}
          <text x="245" y= "236" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[0]} </text>
          <text x="120" y= "115" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[1]} </text>
      <text x="105" y= "130" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5;">${new_rasi_no[2]} </text>
      <text x="230" y= "255" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[3]} </text>
      <text x="105" y= "380" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[4]} </text>
      <text x="120" y= "397" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);letter-spacing: -3px;font-size: 14px;opacity: 0.5; ">${new_rasi_no[5]} </text>
      <text x="245" y= "270" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ;letter-spacing: -3px;font-size: 14px;opacity: 0.5;">${new_rasi_no[6]} </text>
      <text x="365" y= "397" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);letter-spacing: -3px;font-size: 14px;opacity: 0.5;">${new_rasi_no[7]} </text>
     
      <text x="385" y= "380" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);letter-spacing: -3px;font-size: 14px;opacity: 0.5; ">${new_rasi_no[8]} </text>
      <text x="260" y= "255" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);letter-spacing: -3px;font-size: 14px;opacity: 0.5; ">${new_rasi_no[9]} </text>
      <text x="390" y= "130" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[10]} </text>
      <text x="370" y= "110" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-size: 14px;opacity: 0.5; ">${new_rasi_no[11]} </text>

      



      </svg>
       
  
 
`;
  }
  return str;
};
