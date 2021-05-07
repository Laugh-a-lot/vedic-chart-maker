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
      [125, 125],                         // House 1
      [125 + 250*50/100, 250*25/100],     // first element is the origin
      [125 + 250*50/100, 250*75/100],     // rest elements are cordinates of elements from 4 to 9
      [125 + 250*37.5/100, 250*62.5/100], 
      [125 + 250*62.5/100, 250*62.5/100],  
      [125 + 250*37.5/100, 250*37.5/100],
      [125 + 250*62.5/100, 250*37.5/100],
      ],
      [
        [15, 0],
        [250/2, 85],
        [250/2, 20],
        [250/3, 20],
        [250*4/6, 20],
        [250/6, 20],
        [250*5/6, 20],
      ],
      [
        [125, 125],
        [125 - 125*75/100*1.1, 125 - 250/6],        // House 3
        [125 - 125*75/100*1.1, 125 + 250/6],        // first element is the origin
        [125 - 125*50/100*1.1, 125 - 250/6],          // rest elements are cordinates of elements from 4 to 9
        [125 - 125*50/100*1.1, 125 + 250/6], 
        [125 - 125*75/100*1.1, 125 + 250/3], 
        [125 - 125*75/100*1.1, 125 - 250/3], 
      ],
      [
        [0, 250], 
        [ 250*50/100, 125 + 250*25/100],      // House 4
        [250*50/100, 125 + 250*75/100],       // first element is the origin
        [250*37.5/100, 125 +  250*62.5/100],  // rest elements are cordinates of elements from 4 to 9
        [250*62.5/100, 125 + 250*62.5/100],
        [250*37.5/100, 125 + 250*37.5/100],
        [250*62.5/100, 125 + 250*37.5/100],
        ],

      [
        [125, 375],
        [125 - 125*75/100*1.1, 375 - 250/6],        // House 5
        [125 - 125*75/100*1.1, 375 + 250/6],        // first element is the origin
        [125 - 125*50/100*1.1, 375 - 250/6],          // rest elements are cordinates of elements from 4 to 9
        [125 - 125*50/100*1.1, 375 + 250/6], 
        [125 - 125*75/100*1.1, 375 + 250/3], 
        [125 - 125*75/100*1.1, 375 - 250/3],
      ],
      [
        [15, 500],
        [250/2, 500 - 85],
        [250/2, 500 -20],
        [250/3, 500 -20],
        [250*4/6, 500 -20],
        [250/6, 500 -20],
        [250*5/6, 500 -20],
      ],
      [
        [125, 375], 
        [125 + 250*50/100, 250 + 250*25/100],       // House 7
        [125 + 250*50/100, 250 + 250*75/100],       // first element is the origin
        [125 + 250*37.5/100, 250 +  250*62.5/100],  // rest elements are cordinates of elements from 4 to 9
        [125 + 250*62.5/100, 250 + 250*62.5/100],
        [125 + 250*37.5/100, 250 + 250*37.5/100],
        [125 + 250*62.5/100, 250 + 250*37.5/100],
        ],
      [
        [265, 500],
        [250 + 250/2, 500 - 85],
        [250 + 250/2, 500 -20],
        [250 + 250/3, 500 -20],
        [250 + 250*4/6, 500 -20],
        [250 + 250/6, 500 -20],
        [250 + 250*5/6, 500 -20],
    ],
    [
        [375, 375],
        [375 + 125*75/100*1.1, 375 - 250/6],        // House 9
        [375 + 125*75/100*1.1, 375 + 250/6],        // first element is the origin
        [375 + 125*50/100*1.1, 375 - 250/6],          // rest elements are cordinates of elements from 4 to 9
        [375 + 125*50/100*1.1, 375 + 250/6], 
        [375 + 125*75/100*1.1, 375 + 250/3], 
        [375 + 125*75/100*1.1, 375 - 250/3],
      ],
      [
        [250, 250], 
        [250 + 250*50/100, 125 + 250*25/100],         // House 10
        [250 + 250*50/100, 125 + 250*75/100],         // first element is the origin
        [250 + 250*37.5/100,125 + 250*62.5/100],      // rest elements are cordinates of elements from 4 to 9
        [250 + 250*62.5/100,125 + 250*62.5/100],
        [250 + 250*37.5/100,125 + 250*37.5/100],
        [250 + 250*62.5/100,125 + 250*37.5/100],
        ],
      [
        [375, 125],
        [375 + 125*75/100*1.1, 125 - 250/6],        // House 11
        [375 + 125*75/100*1.1, 125 + 250/6],        // first element is the origin
        [375 + 125*50/100*1.1, 125 - 250/6],          // rest elements are cordinates of elements from 4 to 9
        [375 + 125*50/100*1.1, 125 + 250/6], 
        [375 + 125*75/100*1.1, 125 + 250/3], 
        [375 + 125*75/100*1.1, 125 - 250/3],
      ],
      [
        [265, 0],
        [250 + 250/2, 80],
        [250 + 250/2, 20],
        [250 + 250/3, 20],
        [250 + 250*4/6, 20],
        [250 + 250/6, 20],
        [250 + 250*5/6, 20],
      ],
    ],
    rasiAddresses = [
      [
        [150, 40],
        [180, 40],
        [210, 40],
        [150, 80],
        [180, 80],
        [210, 80],
        [150, 120],
        [180, 120],
        [210, 120],
      ],
      [
        [270, 40],
        [300, 40],
        [330, 40],
        [270, 80],
        [300, 80],
        [330, 80],
        [270, 120],
        [300, 120],
        [330, 120],
      ],
      [
        [400, 40],
        [430, 40],
        [460, 40],
        [400, 80],
        [430, 80],
        [460, 80],
        [400, 120],
        [430, 120],
        [460, 120],
      ],
      [
        [400, 160],
        [430, 160],
        [460, 160],
        [400, 190],
        [430, 190],
        [460, 190],
        [400, 210],
        [430, 210],
        [460, 210],
      ],
      [
        [400, 280],
        [430, 280],
        [460, 280],
        [400, 310],
        [430, 310],
        [460, 310],
        [400, 340],
        [430, 340],
        [460, 340],
      ],
      [
        [400, 410],
        [430, 410],
        [460, 410],
        [400, 440],
        [430, 440],
        [460, 440],
        [400, 470],
        [430, 470],
        [460, 470],
      ],
      [
        [270, 410],
        [300, 410],
        [330, 410],
        [270, 440],
        [300, 440],
        [330, 440],
        [270, 470],
        [300, 470],
        [330, 470],
      ],
      [
        [150, 410],
        [180, 410],
        [210, 410],
        [150, 440],
        [180, 440],
        [210, 440],
        [150, 470],
        [180, 470],
        [210, 470],
      ],
      [
        [25, 410],
        [55, 410],
        [85, 410],
        [25, 440],
        [55, 440],
        [85, 440],
        [25, 470],
        [55, 470],
        [85, 470],
      ],
      [
        [25, 280],
        [55, 280],
        [85, 280],
        [25, 310],
        [55, 310],
        [85, 310],
        [25, 340],
        [55, 340],
        [85, 340],
      ],
      [
        [25, 160],
        [55, 160],
        [85, 160],
        [25, 190],
        [55, 190],
        [85, 190],
        [25, 210],
        [55, 210],
        [85, 210],
      ],
      [
        [25, 40],
        [55, 40],
        [85, 40],
        [25, 80],
        [55, 80],
        [85, 80],
        [25, 120],
        [55, 120],
        [85, 120],
      ],
    ],
    rasi_no = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    new_rasi_no = [];

  var startRasi = newjson[0].rasi_no;

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

  console.log(house, "house");
  house.forEach((element, ind) => {
    // there are 5 types of houses: full square(1, 4, 7, 10), upper triangle(6, 9), lower triangle(2, 12), right triangle(3, 5), left triangle(11, 8)
    
    
    element.forEach((houseelem, Hindex) => {
      // for dynamic positions
      if (Hindex < 3) {
        if (ind == 0 || ind == 3 || ind == 6 || ind == 9) {// for whole square house
          svgStringHouse =
            svgStringHouse +
            `<text x="${houseAddresses[ind][0][0] + (250 / (element.length < 4 ? element.length + 1 : 4)) * (Hindex + 1 < 4 ? Hindex + 1 : 2)
            - 10}" y= "${houseAddresses[ind][0][1] + 5
            }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
        }
          
        else if (ind == 2 || ind == 4 || ind == 8 || ind == 10) { //for left and right triangles
          svgStringHouse =
            svgStringHouse +
            `<text x="${houseAddresses[ind][0][0] + (125 / (element.length < 4 ? element.length + 1 : 4)) * (Hindex + 1 < 4 ? Hindex + 1 : 2) * (ind < 5 ? -1.1 : 1.1)
            - 10}" y= "${houseAddresses[ind][0][1] + 5
            }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
        }
        else { //for top and bottom triangles
          svgStringHouse =
            svgStringHouse +
            `<text x="${houseAddresses[ind][0][0] + (220 / (element.length < 4 ? element.length + 1 : 4)) * (Hindex + 1 < 4 ? Hindex + 1 : 2)
            - 10}" y= "${houseAddresses[ind][0][1] + 125 * (ind == 1 || ind == 11 ? 1 : -0.75) / 2.2 - 5}" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
        
        }
      }
// for fixed positions
      else {   
        svgStringHouse =
          svgStringHouse +
          `<text x="${houseAddresses[ind][Hindex - 2][0] - 10}" y= "${houseAddresses[ind][Hindex - 2][1] + 5}" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83);font-weight:bold ">${houseelem}</text>`;
      }
    });
  });
          
    



  rasi.forEach((element, ind) => {
    element.forEach((houseelem, Hindex) => {
      let isBold = false;
      if (houseelem == "As") {
        isBold = true;
      }

      svgStringRasi =
        svgStringRasi +
        `<text x="${rasiAddresses[ind][Hindex][0]}" y= "${
          rasiAddresses[ind][Hindex][1]
        }" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83)${
          isBold ? ";font-weight:bold" : ""
        } ">${houseelem}</text>`;
    });
  });

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
          <text x="240" y= "230" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[0]} </text>
          <text x="120" y= "110" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[1]} </text>
      <text x="100" y= "130" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[2]} </text>
      <text x="230" y= "255" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[3]} </text>
      <text x="100" y= "380" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[4]} </text>
      <text x="120" y= "400" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[5]} </text>
      <text x="240" y= "275" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[6]} </text>
      <text x="370" y= "400" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[7]} </text>
     
      <text x="390" y= "380" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[8]} </text>
      <text x="260" y= "255" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[9]} </text>
      <text x="390" y= "130" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[10]} </text>
      <text x="370" y= "110" style = "font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${new_rasi_no[11]} </text>

      



      </svg>
       
  
 
`;
  }
  return str;
};
