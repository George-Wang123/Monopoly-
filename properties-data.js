//Loading images
const whiteDie = [
  'images/dice/die-01.gif', 'images/dice/die-02.png', 'images/dice/die-03.png', 'images/dice/die-04.png', 'images/dice/die-05.png', 'images/dice/die-06.png'
];
const darkDie = [
  'images/dice/die-11.jpeg', 'images/dice/die-12.jpeg', 'images/dice/die-13.jpeg', 'images/dice/die-14.jpeg', 'images/dice/die-15.jpeg', 'images/dice/die-16.jpg'
];
const propertiesData = [
  {
    id: 'Go',
    coordinate: {top: '545px', left: '530px'},
  },
  {
    id: 'Mediterranean Avenue',
    coordinate: {top: '545px', left: '470px'},
    cost: 60,
    mortgage: 30,
    group: 'brown',
    setComplete: false,
    houseBuilt: 0,
    rent: [2, 4, 10, 30, 90, 160, 250],
    build: 50,
    owner: null
  },
  {
    id: 'Community Chest',
    coordinate: {top: '545px', left: '420px'},
  },
  {
    id: 'Baltic Avenue',
    coordinate: {top: '545px', left: '370px'},
    cost: 60,
    mortgage: 30,
    group: 'brown',
    setComplete: false,
    houseBuilt: 0,
    rent: [4, 8, 20, 60, 180, 320, 450],
    build: 50,
    owner: null
  },
  {
    id: 'Income Tax',
    coordinate: {top: '545px', left: '320px'},
  },
  {
    id: 'Reading Railroad',
    coordinate: {top: '545px', left: '270px'},
    cost: 200,
    mortgage: 100,
    group: 'railroads',
    setComplete: false,
    rent: [25, 50, 100, 200],
    owner: null
  },
  {
    id: 'Oriental Avenue',
    coordinate: {top: '545px', left: '220px'},
    cost: 100,
    mortgage: 50,
    group: 'lightBlue',
    setComplete: false,
    houseBuilt: 0,
    rent: [6, 12, 30, 90, 270, 400, 550],
    build: 50,
    owner: null
  },
  {
    id: 'Chance',
    coordinate: {top: '545px', left: '170px'},
  },
  {
    id: 'Vermont Avenue',
    coordinate: {top: '545px', left: '120px'},
    cost: 100,
    mortgage: 50,
    group: 'lightBlue',
    setComplete: false,
    houseBuilt: 0,
    rent: [6, 12, 30, 90, 270, 400, 550],
    build: 50,
    owner: null
  },
  {
    id: 'Connecticut Avenue',
    coordinate: {top: '545px', left: '70px'},
    cost: 120,
    mortgage: 60,
    group: 'lightBlue',
    setComplete: false,
    houseBuilt: 0,
    rent: [8, 16, 40, 100, 300, 450, 600],
    build: 50,
    owner: null
  },
  {
    id: 'Jail',
    coordinate: {top: '545px', left: '10px'},
  },
  {
    id: 'St. Charles Place',
    coordinate: {top: '478px', left: '10px'},
    cost: 140,
    mortgage: 70,
    group: 'purple',
    setComplete: false,
    houseBuilt: 0,
    rent: [10, 20, 50, 150, 450, 625, 750],
    build: 100,
    owner: null
  },
  {
    id: 'Electric Company',
    coordinate: {top: '429px', left: '10px'},
    cost: 150,
    mortgage: 75,
    group: 'utility',
    setComplete: false,
    owner: null
  },
  {
    id: 'States Avenue',
    coordinate: {top: '380px', left: '10px'},
    cost: 140,
    mortgage: 70,
    group: 'purple',
    setComplete: false,
    houseBuilt: 0,
    rent: [10, 20, 50, 150, 450, 625, 750],
    build: 100,
    owner: null
  },
  {
    id: 'Virginia Avenue',
    coordinate: {top: '331px', left: '10px'},
    cost: 160,
    mortgage: 80,
    group: 'purple',
    setComplete: false,
    houseBuilt: 0,
    rent: [12, 24, 60, 180, 500, 700, 900],
    build: 100,
    owner: null
  },
  {
    id: 'Pennsylvania Railroad',
    coordinate: {top: '282px', left: '10px'},
    cost: 200,
    mortgage: 100,
    group: 'railroads',
    setComplete: false,
    rent: [25, 50, 100, 200],
    owner: null
  },
  {
    id: 'St. James Place',
    coordinate: {top: '233px', left: '10px'},
    cost: 180,
    mortgage: 90,
    group: 'orange',
    setComplete: false,
    houseBuilt: 0,
    rent: [14, 28, 70, 200, 550, 750, 950],
    build: 100,
    owner: null
  },
  {
    id: 'Community Chest',
    coordinate: {top: '184px', left: '10px'},
  },
  {
    id: 'Tennessee Avenue',
    coordinate: {top: '135px', left: '10px'},
    cost: 180,
    mortgage: 90,
    group: 'orange',
    setComplete: false,
    houseBuilt: 0,
    rent: [14, 28, 70, 200, 550, 750, 950],
    build: 100,
    owner: null
  },
  {
    id: 'New York Avenue',
    coordinate: {top: '86px', left: '10px'},
    cost: 200,
    mortgage: 100,
    group: 'orange',
    setComplete: false,
    houseBuilt: 0,
    rent: [16, 32, 80, 220, 600, 800, 1000],
    build: 100,
    owner: null
  },
  {
    id: 'Free Parking',
    coordinate: {top: '20px', left: '10px'},
  },
  {
    id: 'Kentucky Avenue',
    coordinate: {top: '20px', left: '70px'},
    cost: 220,
    mortgage: 110,
    group: 'red',
    setComplete: false,
    houseBuilt: 0,
    rent: [18, 36, 90, 250, 700, 875, 1050],
    build: 150,
    owner: null
  },
  {
    id: 'Chance',
    coordinate: {top: '20px', left: '120px'},
  },
  {
    id: 'Indiana Avenue',
    coordinate: {top: '20px', left: '170px'},
    cost: 220,
    mortgage: 110,
    group: 'red',
    setComplete: false,
    houseBuilt: 0,
    rent: [18, 36, 90, 250, 700, 875, 1050],
    build: 150,
    owner: null
  },
  {
    id: 'Illinois Avenue',
    coordinate: {top: '20px', left: '220px'},
    cost: 240,
    mortgage: 120,
    group: 'red',
    setComplete: false,
    houseBuilt: 0,
    rent: [20, 40, 100, 300, 750, 925, 1100],
    build: 150,
    owner: null
  },
  {
    id: 'B&O Railroad',
    coordinate: {top: '20px', left: '270px'},
    cost: 200,
    mortgage: 100,
    group: 'railroads',
    setComplete: false,
    rent: [25, 50, 100, 200],
    owner: null
  },
  {
    id: 'Atlantic Avenue',
    coordinate: {top: '20px', left: '320px'},
    cost: 260,
    mortgage: 130,
    group: 'yellow',
    setComplete: false,
    houseBuilt: 0,
    rent: [22, 44, 110, 330, 800, 975, 1150],
    build: 150,
    owner: null
  },
  {
    id: 'Ventnor Avenue',
    coordinate: {top: '20px', left: '370px'},
    cost: 260,
    mortgage: 130,
    group: 'yellow',
    setComplete: false,
    houseBuilt: 0,
    rent: [22, 44, 110, 330, 800, 975, 1150],
    build: 150,
    owner: null
  },
  {
    id: 'Water Works',
    coordinate: {top: '20px', left: '420px'},
    cost: 150,
    mortgage: 75,
    group: 'utility',
    setComplete: false,
    owner: null
  },
  {
    id: 'Marvin Gardens',
    coordinate: {top: '20px', left: '470px'},
    cost: 280,
    mortgage: 140,
    group: 'yellow',
    setComplete: false,
    houseBuilt: 0,
    rent: [24, 48, 120, 360, 850, 1025, 1200],
    build: 150,
    owner: null
  },
  {
    id: 'Go To Jail',
    coordinate: {top: '20px', left: '530px'},
  },
  {
    id: 'Pacific Avenue',
    coordinate: {top: '86px', left: '530px'},
    cost: 300,
    mortgage: 150,
    group: 'green',
    setComplete: false,
    houseBuilt: 0,
    rent: [26, 52, 130, 390, 900, 1100, 1275],
    build: 200,
    owner: null
  },
  {
    id: 'North Carolina Avenue',
    coordinate: {top: '133px', left: '530px'},
    cost: 300,
    mortgage: 150,
    group: 'green',
    setComplete: false,
    houseBuilt: 0,
    rent: [26, 52, 130, 390, 900, 1100, 1275],
    build: 200,
    owner: null
  },
  {
    id: 'Community Chest',
    coordinate: {top: '182px', left: '530px'},
  },
  {
    id: 'Pennsylvania Avenue',
    coordinate: {top: '231px', left: '530px'},
    cost: 320,
    mortgage: 160,
    group: 'green',
    setComplete: false,
    houseBuilt: 0,
    rent: [28, 56, 150, 450, 1000, 1200, 1400],
    build: 200,
    owner: null
  },
  {
    id: 'Short Line',
    coordinate: {top: '280px', left: '530px'},
    cost: 200,
    mortgage: 100,
    group: 'railroads',
    setComplete: false,
    rent: [25, 50, 100, 200],
    owner: null
  },
  {
    id: 'Chance',
    coordinate: {top: '329px', left: '530px'},
  },
  {
    id: 'Park Place',
    coordinate: {top: '378px', left: '530px'},
    cost: 350,
    mortgage: 175,
    group: 'darkBlue',
    setComplete: false,
    houseBuilt: 0,
    rent: [35, 70, 175, 500, 1100, 1300, 1500],
    build: 200,
    owner: null
  },
  {
    id: 'Luxury Tax',
    coordinate: {top: '427px', left: '530px'},
  },
  {
    id: 'Boardwalk',
    coordinate: {top: '476px', left: '530px'},
    cost: 400,
    mortgage: 200,
    group: 'darkBlue',
    setComplete: false,
    houseBuilt: 0,
    rent: [50, 100, 200, 600, 1400, 1700, 2000],
    build: 200,
    owner: null
  }
];
//Loading properties
const brown = [propertiesData[1], propertiesData[3]];
const lightBlue = [propertiesData[6], propertiesData[8], propertiesData[9]];
const purple = [propertiesData[11], propertiesData[13], propertiesData[14]];
const orange = [propertiesData[16], propertiesData[18], propertiesData[19]];
const red = [propertiesData[21], propertiesData[23], propertiesData[24]];
const yellow = [propertiesData[26], propertiesData[27], propertiesData[29]];
const green = [propertiesData[31], propertiesData[32], propertiesData[34]];
const darkBlue = [propertiesData[37], propertiesData[39]];
const railroads = [propertiesData[5], propertiesData[15], propertiesData[25], propertiesData[35]];
const utility = [propertiesData[12], propertiesData[28]];
const properties = [brown, lightBlue, purple, orange, red, yellow, green, darkBlue, railroads, utility];

//Loading chance card images
const chanceCardImages = [
  'images/chance-cards/chance-card-00.webp', 'images/chance-cards/chance-card-01.webp', 
  'images/chance-cards/chance-card-02.webp', 'images/chance-cards/chance-card-03.webp', 
  'images/chance-cards/chance-card-04.webp', 'images/chance-cards/chance-card-05.webp', 
  'images/chance-cards/chance-card-06.webp', 'images/chance-cards/chance-card-07.webp', 
  'images/chance-cards/chance-card-08.webp', 'images/chance-cards/chance-card-09.webp', 
  'images/chance-cards/chance-card-10.webp', 'images/chance-cards/chance-card-11.webp', 
  'images/chance-cards/chance-card-12.webp', 'images/chance-cards/chance-card-13.webp', 
  'images/chance-cards/chance-card-14.webp', 'images/chance-cards/chance-card-15.webp'
];

const chanceCards = [
  { image: chanceCardImages[0], function: function0 },
  { image: chanceCardImages[1], function: function1 },
  { image: chanceCardImages[2], function: function2 },
  { image: chanceCardImages[3], function: function3 },
  { image: chanceCardImages[4], function: function4 },
  { image: chanceCardImages[5], function: function5 },
  { image: chanceCardImages[6], function: function6 },
  { image: chanceCardImages[7], function: function7 },
  { image: chanceCardImages[8], function: function8 },
  { image: chanceCardImages[9], function: function9 },
  { image: chanceCardImages[10], function: function10 },
  { image: chanceCardImages[11], function: function11 },
  { image: chanceCardImages[12], function: function12 },
  { image: chanceCardImages[13], function: function13 },
  { image: chanceCardImages[14], function: function14 },
  { image: chanceCardImages[15], function: function15 }
];

