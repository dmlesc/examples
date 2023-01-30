var lower = ["lower"];
var upper = ["upper"];
var currentIDs;
var letterCount = 0;
var letters = {
  "A":{
    "left":90,
    "top":600
  },
  "B":{
    "left":365,
    "top":650
  },
  "C":{
    "left":245,
    "top":650
  },
  "D":{
    "left":210,
    "top":600
  },
  "E":{
    "left":190,
    "top":550
  },
  "F":{
    "left":270,
    "top":600
  },
  "G":{
    "left":330,
    "top":600
  },
  "H":{
    "left":390,
    "top":600
  },
  "I":{
    "left":490,
    "top":550
  },
  "J":{
    "left":450,
    "top":600
  },
  "K":{
    "left":510,
    "top":600
  },
  "L":{
    "left":570,
    "top":600
  },
  "M":{
    "left":485,
    "top":650
  },
  "N":{
    "left":425,
    "top":650
  },
  "O":{
    "left":550,
    "top":550
  },
  "P":{
    "left":610,
    "top":550
  },
  "Q":{
    "left":70,
    "top":550
  },
  "R":{
    "left":250,
    "top":550
  },
  "S":{
    "left":150,
    "top":600
  },
  "T":{
    "left":310,
    "top":550
  },
  "U":{
    "left":430,
    "top":550
  },
  "V":{
    "left":305,
    "top":650
  },
  "W":{
    "left":130,
    "top":550
  },
  "X":{
    "left":185,
    "top":650
  },
  "Y":{
    "left":370,
    "top":550
  },
  "Z":{
    "left":125,
    "top":650
  }
};

var hidden = [ 
  {
    "code":"pipe01",
    "left":90,
    "top":50
  },
  {
    "code":"pipe02",
    "left":90,
    "top":67
  },
  {
    "code":"pipe03",
    "left":90,
    "top":84
  },
  {
    "code":"pipe04",
    "left":90,
    "top":101
  },
  {
    "code":"pipe05",
    "left":90,
    "top":118
  },
  {
    "code":"undr06",
    "left":95,
    "top":33
  },
  {
    "code":"undr07",
    "left":108,
    "top":33
  },
  {
    "code":"undr08",
    "left":121,
    "top":33
  },
  {
    "code":"bslh09",
    "left":129,
    "top":50
  },
  {
    "code":"fslh10",
    "left":129,
    "top":67
  },
  {
    "code":"undr11",
    "left":118,
    "top":70
  },
  {
    "code":"undr12",
    "left":105,
    "top":70
  },
  {
    "code":"bslh13",
    "left":128,
    "top":90
  },
  {
    "code":"pipe14",
    "left":130,
    "top":107
  },
  {
    "code":"fslh15",
    "left":125,
    "top":124
  },
  {
    "code":"undr16",
    "left":112,
    "top":125
  },
  {
    "code":"undr17",
    "left":99,
    "top":125
  },
  {
    "code":"undr18",
    "left":160,
    "top":95
  },
  {
    "code":"undr19",
    "left":173,
    "top":95
  },
  {
    "code":"undr20",
    "left":186,
    "top":95
  },
  {
    "code":"bslh21",
    "left":188,
    "top":90
  },
  {
    "code":"undr22",
    "left":173,
    "top":78
  },
  {
    "code":"fslh23",
    "left":162,
    "top":90
  },
  {
    "code":"bslh24",
    "left":162,
    "top":113
  },
  {
    "code":"undr25",
    "left":173,
    "top":112
  },
  {
    "code":"undr26",
    "left":186,
    "top":112
  },
  {
    "code":"pipe27",
    "left":220,
    "top":55
  },
  {
    "code":"pipe28",
    "left":220,
    "top":80
  },
  {
    "code":"pipe29",
    "left":220,
    "top":104
  },
  {
    "code":"pipe30",
    "left":220,
    "top":129
  },
  {
    "code":"pipe31",
    "left":255,
    "top":118
  },
  {
    "code":"pipe32",
    "left":255,
    "top":96
  },
  {
    "code":"undr33",
    "left":290,
    "top":95
  },
  {
    "code":"undr34",
    "left":303,
    "top":95
  },
  {
    "code":"undr35",
    "left":316,
    "top":95
  },
  {
    "code":"bslh36",
    "left":318,
    "top":90
  },
  {
    "code":"undr37",
    "left":303,
    "top":78
  },
  {
    "code":"fslh38",
    "left":292,
    "top":90
  },
  {
    "code":"bslh39",
    "left":292,
    "top":113
  },
  {
    "code":"undr40",
    "left":303,
    "top":112
  },
  {
    "code":"undr41",
    "left":316,
    "top":112
  },
  {
    "code":"bslh42",
    "left":350,
    "top":93
  },
  {
    "code":"bslh43",
    "left":355,
    "top":112
  },
  {
    "code":"fslh44",
    "left":365,
    "top":112
  },
  {
    "code":"fslh45",
    "left":370,
    "top":93
  },
  {
    "code":"undr46",
    "left":400,
    "top":100
  },
  {
    "code":"undr47",
    "left":413,
    "top":100
  },
  {
    "code":"undr48",
    "left":426,
    "top":100
  },
  {
    "code":"bslh49",
    "left":428,
    "top":95
  },
  {
    "code":"undr50",
    "left":413,
    "top":83
  },
  {
    "code":"fslh51",
    "left":402,
    "top":95
  },
  {
    "code":"bslh52",
    "left":402,
    "top":118
  },
  {
    "code":"undr53",
    "left":413,
    "top":118
  },
  {
    "code":"undr54",
    "left":426,
    "top":118
  },
  {
    "code":"pipe55",
    "left":500,
    "top":60
  },
  {
    "code":"pipe56",
    "left":500,
    "top":77
  },
  {
    "code":"pipe57",
    "left":500,
    "top":94
  },
  {
    "code":"pipe58",
    "left":500,
    "top":111
  },
  {
    "code":"pipe59",
    "left":535,
    "top":85
  },
  {
    "code":"pipe60",
    "left":535,
    "top":102
  },
  {
    "code":"pipe61",
    "left":535,
    "top":119
  },
  {
    "code":"undr62",
    "left":525,
    "top":90
  },
  {
    "code":"undr63",
    "left":540,
    "top":90
  },
  {
    "code":"fslh64",
    "left":125,
    "top":175
  },
  {
    "code":"fslh65",
    "left":120,
    "top":192
  },
  {
    "code":"fslh66",
    "left":115,
    "top":209
  },
  {
    "code":"fslh67",
    "left":110,
    "top":226
  },
  {
    "code":"bslh68",
    "left":135,
    "top":175
  },
  {
    "code":"bslh69",
    "left":140,
    "top":192
  },
  {
    "code":"bslh70",
    "left":145,
    "top":209
  },
  {
    "code":"bslh71",
    "left":150,
    "top":226
  },
  {
    "code":"undr72",
    "left":120,
    "top":200
  },
  {
    "code":"undr73",
    "left":135,
    "top":200
  },
  {
    "code":"undr74",
    "left":185,
    "top":185
  },
  {
    "code":"fslh75",
    "left":174,
    "top":197
  },
  {
    "code":"bslh76",
    "left":174,
    "top":220
  },
  {
    "code":"undr77",
    "left":185,
    "top":220
  },
  {
    "code":"pipe78",
    "left":215,
    "top":175
  },
  {
    "code":"pipe79",
    "left":215,
    "top":192
  },
  {
    "code":"pipe80",
    "left":215,
    "top":209
  },
  {
    "code":"pipe81",
    "left":215,
    "top":226
  },
  {
    "code":"undr82",
    "left":222,
    "top":200
  },
  {
    "code":"undr83",
    "left":235,
    "top":200
  },
  {
    "code":"pipe84",
    "left":245,
    "top":209
  },
  {
    "code":"pipe85",
    "left":245,
    "top":226
  },
  {
    "code":"pipe86",
    "left":265,
    "top":223
  },
  {
    "code":"pipe87",
    "left":265,
    "top":206
  },
  {
    "code":"undr88",
    "left":300,
    "top":205
  },
  {
    "code":"undr89",
    "left":313,
    "top":205
  },
  {
    "code":"undr90",
    "left":326,
    "top":205
  },
  {
    "code":"bslh91",
    "left":328,
    "top":200
  },
  {
    "code":"undr92",
    "left":313,
    "top":188
  },
  {
    "code":"fslh93",
    "left":302,
    "top":200
  },
  {
    "code":"bslh94",
    "left":302,
    "top":223
  },
  {
    "code":"undr95",
    "left":313,
    "top":222
  },
  {
    "code":"undr96",
    "left":326,
    "top":222
  },
  {
    "code":"bslh98",
    "left":360,
    "top":203
  },
  {
    "code":"bslh99",
    "left":365,
    "top":222
  },
  {
    "code":"fslh100",
    "left":375,
    "top":222
  },
  {
    "code":"fslh101",
    "left":380,
    "top":203
  },
  {
    "code":"undr102",
    "left":410,
    "top":210
  },
  {
    "code":"undr103",
    "left":423,
    "top":210
  },
  {
    "code":"undr104",
    "left":436,
    "top":210
  },
  {
    "code":"bslh105",
    "left":438,
    "top":205
  },
  {
    "code":"undr106",
    "left":423,
    "top":193
  },
  {
    "code":"fslh107",
    "left":412,
    "top":205
  },
  {
    "code":"bslh108",
    "left":412,
    "top":228
  },
  {
    "code":"undr109",
    "left":423,
    "top":228
  },
  {
    "code":"undr110",
    "left":436,
    "top":228
  },
  {
    "code":"pipe111",
    "left":510,
    "top":170
  },
  {
    "code":"pipe112",
    "left":510,
    "top":187
  },
  {
    "code":"pipe113",
    "left":510,
    "top":204
  },
  {
    "code":"pipe114",
    "left":510,
    "top":221
  },
  {
    "code":"pipe115",
    "left":545,
    "top":195
  },
  {
    "code":"pipe116",
    "left":545,
    "top":212
  },
  {
    "code":"pipe117",
    "left":545,
    "top":229
  },
  {
    "code":"undr118",
    "left":535,
    "top":200
  },
  {
    "code":"undr119",
    "left":550,
    "top":200
  }
];

var length = hidden.length;
var stars = [
  {
    "left":85,
    "top":35,
    "size":35
  },
  {
    "left":122,
    "top":40,
    "size":24
  },
  {
    "left":94,
    "top":78,
    "size":21
  },
  {
    "left":126,
    "top":98,
    "size":24
  },
  {
    "left":179,
    "top":83,
    "size":30
  },
  {
    "left":163,
    "top":121,
    "size":24
  },
  {
    "left":215,
    "top":141,
    "size":34
  },
  {
    "left":251,
    "top":78,
    "size":25
  },
  {
    "left":293,
    "top":83,
    "size":23
  },
  {
    "left":321,
    "top":117,
    "size":28
  },
  {
    "left":344,
    "top":84,
    "size":30
  },
  {
    "left":358,
    "top":123,
    "size":20
  },
  {
    "left":402,
    "top":88,
    "size":23
  },
  {
    "left":427,
    "top":101,
    "size":30
  },
  {
    "left":496,
    "top":53,
    "size":21
  },
  {
    "left":496,
    "top":120,
    "size":25
  },
  {
    "left":531,
    "top":77,
    "size":23
  },
  {
    "left":530,
    "top":126,
    "size":24
  },
  {
    "left":126,
    "top":165,
    "size":22
  },
  {
    "left":149,
    "top":232,
    "size":30
  },
  {
    "left":175,
    "top":190,
    "size":26
  },
  {
    "left":211,
    "top":163,
    "size":26
  },
  {
    "left":239,
    "top":202,
    "size":27
  },
  {
    "left":242,
    "top":234,
    "size":21
  },
  {
    "left":258,
    "top":181,
    "size":50
  },
  {
    "left":303,
    "top":232,
    "size":21
  },
  {
    "left":295,
    "top":213,
    "size":21
  },
  {
    "left":329,
    "top":209,
    "size":21
  },
  {
    "left":369,
    "top":230,
    "size":26
  },
  {
    "left":380,
    "top":194,
    "size":29
  },
  {
    "left":408,
    "top":215,
    "size":21
  },
  {
    "left":431,
    "top":198,
    "size":26
  },
  {
    "left":507,
    "top":160,
    "size":30
  },
  {
    "left":553,
    "top":205,
    "size":30
  },
  {
    "left":542,
    "top":238,
    "size":25
  }
];

var segNumber = 0;
var segOrder = [16,25,29,31,40,44,53,57,62,72,76,84,86,95,99,108,112,118];
var son = 0;
var properOrder = ["B","e","l","i","e","v","e","I","t","A","c","h","i","e","v","e","I","t"];
var pon = 0;
var spinArray = ["/","-","\\","-","|"];

function init() {
  if (/chrome/i.test(navigator.userAgent)) {
    for (var letter in letters) {
      var newKey = addKey(letter, letters[letter], true);
      getID("lower").appendChild(newKey);
      newKey = addKey(letter, letters[letter], false);
      getID("upper").appendChild(newKey);
    }
    currentIDs = lower;
    hideIDs(upper);
    for (var i=0;i<stars.length;i++) {
      var newStar = addKey("*", stars[i], false);
      newStar.style.fontSize = stars[i]["size"];
      getID("stars").appendChild(newStar);
    }
  }
else
  document.body.innerHTML = "you must use chrome";
}
function addKey(letter, style, lowercase) {
  var k = document.createElement("DIV");
  var l = letter;
  if (lowercase)
    l = l.toLowerCase();
  k.id = l;
  k.style.position = "fixed";
  k.style.left = style["left"] + "px";
  k.style.top = style["top"] + "px";
  k.appendChild(document.createTextNode(l)); 
  return k;
}
window.onkeydown = function(event) {
  if (event.keyCode == 16)  // "shift"
    transition(upper);
  var letter = String.fromCharCode(event.keyCode);
  var left, top;
  if (letters[letter]) {
    lleft = letters[letter]["left"];
    ltop = letters[letter]["top"];
    if (!event.shiftKey)
      letter = letter.toLowerCase();
    getID(letter).style.color = "white";
    setInner("letterCount", ++letterCount);
    if (correctLetter(letter)) {
      sleft = hidden[segNumber]["left"];
      stop = hidden[segNumber]["top"];
      var slope = (stop - ltop)/(sleft - lleft);
      moveUpCorrect(createLetter(letter, lleft), ltop, sleft, stop, slope, segNumber);
      segNumber++;
    }
    else
      moveUp(createLetter(letter, lleft), ltop, 350);
  }
};
function correctLetter(letter) {
  if (letter == properOrder[pon] && segNumber < length) {
    if (segNumber == segOrder[son]) {
      son++;
      pon++;
    }
    return true;
  }
  else
    return false;
}
function addHiddenSegment(seg) {
  var segment = "";
  var code = seg.code.slice(0, 4);
  if (code == "pipe")
    segment = "|";
  else if (code == "undr")
    segment = "_";
  else if (code == "bslh")
    segment = "\\";
  else
    segment = "/";
  var k = document.createElement("DIV");
  k.id = seg["code"];
  k.style.position = "fixed";
  k.style.left = seg["left"] + "px";
  k.style.top = seg["top"] + "px";
  k.appendChild(document.createTextNode(segment)); 
  return k;
}
function createLetter(letter, left) {
  var l = document.createElement("DIV");
  var id = letter + Math.floor((Math.random() * 1000) + 1);
  l.id = id;
  l.style.position = "fixed";
  l.style.left = left + "px";
  l.style.color = "white";
  document.body.appendChild(l);
  setInner(id, letter);
  return id;
}
function moveUp(id, top, end) {
  top = Number(top);
  end = Number(end);
  if (top > end) {
    top--;
    getID(id).style.top = top + "px";
    var moveUpOn = setTimeout("moveUp('" + id + "','" + top + "','" + end + "')",5);
  }
  else {
    clearTimeout(moveUpOn);
    document.body.removeChild(getID(id));
    setInner("letterCount", --letterCount);
  }
}
function moveUpCorrect(id, ltop, sleft, stop, slope, sn) {
  ltop = Number(ltop);
  sleft = Number(sleft);
  stop = Number(stop);
  slope = Number(slope);
  sn = Number(sn);
  if (ltop > stop) {
    ltop--;
    getID(id).style.top = ltop + "px";
    getID(id).style.left = (ltop - stop + slope * sleft) / slope + "px";
    var moveUpOn = setTimeout("moveUpCorrect('" + id + "','" + ltop + "','" + sleft + "','" + stop + "','" + slope + "','" + sn + "')",5);
  }
  else {
    clearTimeout(moveUpOn);
    var newSegment = addHiddenSegment(hidden[sn]);
    getID("hidden").appendChild(newSegment);
    document.body.removeChild(getID(id));
    setInner("letterCount", --letterCount);
    if (sn == length - 1)
        done();
  }
}
window.onkeyup = function(event) {
  switch(event.keyCode) {
    case 16:  // "shift"
      transition(lower);
      break;
  }
  var letter = String.fromCharCode(event.keyCode);
  if (letters[letter]) {
    if (!event.shiftKey)
      letter = letter.toLowerCase();
    getID(letter).style.color = "#009bd5";
  }
}

var width = 437;
var height = 115;
var left = 100;
var logoleft = 200;
var move = 0;
function done() {
  hideIDs(["lower","upper","hidden","stars","letterCount","cloud"]);
  showIDs(["logo"]);
  getID("logo").style.width = width;
  getID("logo").style.height = height;
  resizeBig(1);
}
function resizeBigStart(id) {
  currentID = "big";
  resizeBig();
}
function resizeBig(percent) {
  percent = Number(percent);
  var logo = getID("logo");
  if (percent < 100) {
    logo.style.width = width * (percent / 100) + "px";
    logo.style.height = height * (percent / 100 + "px");
    percent += 1;
    if (percent % 2 == 0) {
      move++;
      logoleft -= 2;
      logo.style.left = logoleft + "px";
    }
    resizeBigOn = setTimeout("resizeBig('" + percent + "')", 10);
  }
  else {
    clearTimeout(resizeBig);
  }
}
function getID(id){return document.getElementById(id);}
function transition(nextIDs){
  hideIDs(currentIDs);
  showIDs(nextIDs);
  currentIDs = nextIDs;
}
function hideIDs(ids){
  for (var i in ids)
    getID(ids[i]).style.display = "none";
}
function showIDs(ids){
  for (var i in ids)
    getID(ids[i]).style.display = "block";
}
function giveFocus(id){getID(id).focus();}
function setInner(id,string){getID(id).innerHTML = string;}