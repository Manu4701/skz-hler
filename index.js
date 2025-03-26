const laufendeZähler = document.getElementById("laufendeZähler");
const tarifMultiplikatorZähler = document.getElementById("tarifZähler");
const gelegtZähler = document.getElementById("gelegtZähler");
const jungfrauenZähler = document.getElementById("jungfrauenZähler");

const sauspielCheckbox = document.getElementById("sauspielCheckbox");
const soloCheckbox = document.getElementById("soloCheckbox");
const wenzCheckbox = document.getElementById("wenzCheckbox");
const ramschCheckbox = document.getElementById("ramschCheckbox");

const normalCheckbox = document.getElementById("normalCheckbox");
const schneiderCheckbox = document.getElementById("schneiderCheckbox");
const schwarzCheckbox = document.getElementById("schwarzCheckbox");

const anzahlLaufendeContainer = document.getElementById("anzahlLaufendeContainer");
const anzahlJungfrauenContainer = document.getElementById("anzahlJungfrauenContainer");
const schneiderSchwarzContainer = document.getElementById("schneiderSchwarzContainer");


const newGameModalOpenButton = document.getElementById("newGame-modal-openbutton");
const newGameModalCloseButton = document.getElementById("newGame-modal-closebutton");
const newGameModal = document.getElementById("newGame-modal");

const newGameFertigButton = document.getElementById("newGame-fertigbutton");

const settingWinnerModalCloseButton = document.getElementById("settingWinner-modal-closebutton");
const settingWinnerModal = document.getElementById("settingWinner-modal");
const settingWinnerFertigButton = document.getElementById("settingWinner-fertigbutton");

const statsModalCloseButton = document.getElementById("stats-modal-closebutton");
const statsModalOpenButton = document.getElementById("stats-modal-openbutton");
const statsModal = document.getElementById("stats-modal");
const statsFertigButton = document.getElementById("stats-fertigbutton");


const lastGameP = document.getElementById("lastGameP");





const spielarCheckboxen = document.querySelectorAll("input[name='spielart']")

const nameRow = document.getElementById("nameRow");
const scoreRow = document.getElementById("scoreRow");
const nameColumn1 = document.getElementById("nameColumn1");
const scoreColumn1 = document.getElementById("scoreColumn1");

const winnerLabel1 = document.getElementById("scoreColumn1");
const loserLabel1 = document.getElementById("loserLabel1");



const winnerOption1 = document.getElementById("winnerOption1");
const loserOption1 = document.getElementById("loserOption1");



var Tabellenköpfe = document.querySelectorAll(".Tabellenkopf");

var Tabelleninhalte = document.querySelectorAll(".Tabelleninhalt")

let grundkosten;
let schneiderSchwarzKosten;
let isSolo;
let isRamsch;


let laufendeKosten;
let tarifMultiplikator;
let anzahlGelegt;

let jungfrauMultiplikator = 1;

let spielkosten;

let kostenSpieler;
let kostenNichtSpieler;

let wenzPlayedCount = 0;
let soloPlayedCount = 0;
let ramschPlayedCount = 0;
let sauspielPlayedCount = 0;
let totalGamesPlayedCount = 0;




let spieler = [
  {name: "Manuel", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Moritz", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Yanis", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Felix", spielstand: null, gamesWon: 0, gamesLost: 0},  
  {name: "Tamara", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Max", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Flo", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Uwe", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Spirkl", spielstand: null, gamesWon: 0, gamesLost: 0},
  {name: "Paul", spielstand: null, gamesWon: 0, gamesLost: 0},
]


firstLoad()
function firstLoad(){
  if (localStorage.getItem("wenzPlayedCount") !== null){
    wenzPlayedCount = Number(localStorage.getItem("wenzPlayedCount"));
  }
  if (localStorage.getItem("soloPlayedCount") !== null){
    soloPlayedCount = Number(localStorage.getItem("soloPlayedCount"));
  }
  if (localStorage.getItem("ramschPlayedCount") !== null){
    ramschPlayedCount = Number(localStorage.getItem("ramschPlayedCount"));
  }
  if (localStorage.getItem("sauspielPlayedCount") !== null){
    sauspielPlayedCount = Number(localStorage.getItem("sauspielPlayedCount"));
  }
  if (localStorage.getItem("wenzPlayedCount") !== null){
    totalGamesPlayedCount = Number(localStorage.getItem("totalGamesPlayedCount"));
  }
  

 
  
  



  const checkboxModelWinner = document.getElementById("spieler1WinnerCheckbox");
  const labelModelWinner = document.getElementById("winnerLabel1");
  const checkboxModelLoser = document.getElementById("spieler1LoserCheckbox");
  const labelModelLoser = document.getElementById("loserLabel1");

  const winnerOptionModel = document.getElementById("winnerOption1");
  const loserOptionModel = document.getElementById("loserOption1");

  const winnerOptions = document.getElementById("winnerOptions");
  const loserOptions = document.getElementById("loserOptions");


  for(let i = 1; i < spieler.length; i++){

    let clonedObject = nameColumn1.cloneNode();
    clonedObject.id = `nameColumn${i+1}`;
    clonedObject.innerText = spieler[i].name;
    nameRow.appendChild(clonedObject);


    let clonedObject2 = scoreColumn1.cloneNode();
    clonedObject2.id = `scoreColumn${i+1}`;
    clonedObject2.innerText = spieler[i].spielstand;
    scoreRow.appendChild(clonedObject2);

    let clonedwinnerOption = winnerOptionModel.cloneNode();
    clonedwinnerOption.id = `winnerOption${i+1}`;
    winnerOptions.appendChild(clonedwinnerOption);


    let clonedloserOption = loserOptionModel.cloneNode();
    clonedloserOption.id = `loserOption${i+1}`;
    loserOptions.appendChild(clonedloserOption);

    let clonedCheckboxWinner = checkboxModelWinner.cloneNode();
    clonedCheckboxWinner.id = `spieler${i+1}WinnerCheckbox`;
    
    let clonedCheckboxLoser = checkboxModelLoser.cloneNode();
    clonedCheckboxLoser.id = `spieler${i+1}LoserCheckbox`;

    let clonedLabelWinner = labelModelWinner.cloneNode();
    clonedLabelWinner.id = `winnerLabel${i+1}`;
    clonedLabelWinner.htmlFor = `spieler${i+1}WinnerCheckbox`;

    let clonedLabelLoser = labelModelLoser.cloneNode();
    clonedLabelLoser.id = `loserLabel${i+1}`
    clonedLabelLoser.htmlFor = `spieler${i+1}LoserCheckbox`

    clonedwinnerOption.appendChild(clonedCheckboxWinner);
    clonedwinnerOption.appendChild(clonedLabelWinner);
    clonedloserOption.appendChild(clonedCheckboxLoser);
    clonedloserOption.appendChild(clonedLabelLoser);

  }


  spieler.forEach(
    (element, index)=> {
  
    if(localStorage.getItem(`spieler${index+1}spielstand`) !== null) {
      element.spielstand = Number(localStorage.getItem(`spieler${index+1}spielstand`))
    }
  }
  )


  //setting labels of checkboxes
  spieler.forEach((element, index)=> {  document.getElementById(`winnerLabel${index+1}`).innerText = spieler[index].name;
  document.getElementById(`loserLabel${index+1}`).innerText = spieler[index].name;});
  

  Tabellenköpfe = document.querySelectorAll(".Tabellenkopf");
  Tabellenköpfe.forEach(
    (element, index)=> {
      element.innerText = spieler[index].name
    }
  )
  Tabelleninhalte = document.querySelectorAll(".Tabelleninhalt");
  Tabelleninhalte.forEach(
    (element, index)=> {
        element.innerText = spieler[index].spielstand
    }
  )
  setStats()
}

function wertefestlegen() {
  if (sauspielCheckbox.checked === true) {
    grundkosten = 20;
    sauspielPlayedCount++;
    console.log(sauspielPlayedCount)
  } else if (soloCheckbox.checked === true) {
    grundkosten = 50;
    soloPlayedCount++;
  } else if (wenzCheckbox.checked === true) {
    grundkosten = 50;
    wenzPlayedCount++;
  } else if (ramschCheckbox.checked === true) {
    grundkosten = 20;
    ramschPlayedCount++;
  } 
  totalGamesPlayedCount++;
  saveCounts();
  

  if (normalCheckbox.checked === true) {
    schneiderSchwarzKosten = 0;
  } else if (schneiderCheckbox.checked === true) {
    schneiderSchwarzKosten = 10;
  } else if (schwarzCheckbox.checked === true) {
    schneiderSchwarzKosten = 20;
  } else {
    window.alert ("Wähle aus ob das Spiel schneider oder schwarz gespielt wurde!")
    return
  }

  laufendeKosten = laufendeZähler.value * 10;

  tarifMultiplikator = tarifMultiplikatorZähler.value;

  anzahlGelegt = gelegtZähler.value;

  anzahlJungfrauen = jungfrauenZähler.value;

  spielkosten = (grundkosten + laufendeKosten + schneiderSchwarzKosten) * Math.pow(2,anzahlGelegt) * tarifMultiplikator * Math.pow(2,anzahlJungfrauen);
  let kostenVorMultiplikation = grundkosten + laufendeKosten + schneiderSchwarzKosten
  console.log(kostenVorMultiplikation);

  laufendeZähler.value = 0;
  jungfrauenZähler.value = 0;
}

settingWinnerFertigButton.addEventListener("click", ()=> {
  const winnerCheckboxen = document.querySelectorAll("input[name='Winner']");
  const loserCheckboxen = document.querySelectorAll("input[name='Loser']");

  if (Array.from(winnerCheckboxen).filter(radio => radio.checked).length + Array.from(loserCheckboxen).filter(radio => radio.checked).length !== 4) {
    window.alert("Wähle insgesamt 4 Spieler aus");
    return
  } else {
    settingWinnerModal.classList.remove("open");
    trageWerteEin();
  }

})

spielarCheckboxen.forEach(radio => {
  radio.addEventListener("change", () =>{
    if (ramschCheckbox.checked) {
      anzahlJungfrauenContainer.hidden = false;
      anzahlLaufendeContainer.hidden = true;
      schneiderSchwarzContainer.hidden = true;
      isRamsch = true;
    } else {
      anzahlJungfrauenContainer.hidden = true;
      anzahlLaufendeContainer.hidden = false;
      schneiderSchwarzContainer.hidden = false;
      isRamsch = false;
    }
  });
});

function trageWerteEin() {
  let kostenGewinner;
  let kostenVerlierer;
  const winnerCheckboxen = document.querySelectorAll("input[name='Winner']");
  const loserCheckboxen = document.querySelectorAll("input[name='Loser']");

  let anzahlWinner = Array.from(winnerCheckboxen).filter(radio => radio.checked).length;
  
  let anzahlLoser = Array.from(loserCheckboxen).filter(radio => radio.checked).length;
  
  if (anzahlLoser === anzahlWinner) {
    kostenGewinner = spielkosten;
    kostenVerlierer = spielkosten;
  } else if (anzahlLoser === 3 && anzahlWinner === 1){
    kostenGewinner = spielkosten * 3;
    kostenVerlierer = spielkosten;
  } else if (anzahlLoser === 1 && anzahlWinner === 3) {
    kostenGewinner = spielkosten;
    kostenVerlierer = spielkosten *3;
  }

     //loading Spielstände from local Storage
    spieler.forEach(
    (element, index)=> {


    element.spielstand = Number(localStorage.getItem(`spieler${index+1}spielstand`))

    Tabelleninhalte = document.querySelectorAll(".Tabelleninhalt");
    Tabelleninhalte.forEach(
      (element, index)=> {
          element.innerText = spieler[index].spielstand
      }
    )

    }
    );

    for (let i = 1; i<= spieler.length; i++) {


    if (document.getElementById(`spieler${i}WinnerCheckbox`).checked){
      spieler[i-1].spielstand += kostenGewinner
    }
    if (document.getElementById(`spieler${i}LoserCheckbox`).checked){
      spieler[i-1].spielstand -= kostenVerlierer
    }

    
  }



  saveSpielstände()
  
  Tabelleninhalte.forEach(
    (element, index)=> {
        element.innerText = spieler[index].spielstand
    }
  ) 

  lastGameP.innerText = `Kosten des letzen Spiels:
   Gewinner: ${(kostenGewinner/100).toFixed(2)}€
   Verlierer: -${(kostenVerlierer/100).toFixed(2)}€`;

}


function setStats() {
  const TotalGamesP = document.getElementById("totalGamesplayedParagraph");
  const SauspielP = document.getElementById("SauspielplayedParagraph");
  const WenzP = document.getElementById("WenzplayedParagraph");
  const SoloP = document.getElementById("SoloplayedParagraph");
  const RamschP = document.getElementById("RamschplayedParagraph");

  TotalGamesP.innerText = `Gesamt: ${totalGamesPlayedCount}`;
  SauspielP.innerText = `Sauspiel: ${((sauspielPlayedCount/totalGamesPlayedCount)*100).toFixed(1)}% (${sauspielPlayedCount}/${totalGamesPlayedCount})`;
  WenzP.innerText = `Wenz: ${((wenzPlayedCount/totalGamesPlayedCount)*100).toFixed(1)}% (${wenzPlayedCount}/${totalGamesPlayedCount})`;
  SoloP.innerText = `Solo: ${((soloPlayedCount/totalGamesPlayedCount)*100).toFixed(1)}% (${soloPlayedCount}/${totalGamesPlayedCount})`;
  RamschP.innerText = `Ramsch: ${((ramschPlayedCount/totalGamesPlayedCount)*100).toFixed(1)}% (${ramschPlayedCount}/${totalGamesPlayedCount})`;
}

//Speichern von Spielständen, Namen und Counts welche Spiele wie oft gespielt wurden im Localstorage
function saveSpielstände(){

  spieler.forEach((element, index)=> {
    localStorage.setItem(`spieler${index+1}spielstand`, element.spielstand)
  })
  
  
  Tabelleninhalte.forEach(
    (element, index)=> {
      	element.innerText = spieler[index].spielstand
    }
  )

}
function saveNamen(){
  spieler.forEach(
    (element, index)=>{
      localStorage.setItem(`spieler${index+1}name`, element.name)
    }
  )
  Tabellenköpfe.forEach(
    (element, index)=> {
      	element.innerText = spieler[index].name
    }
  )
}
function saveCounts () {
  localStorage.setItem("wenzPlayedCount", wenzPlayedCount);
  localStorage.setItem("soloPlayedCount", soloPlayedCount);
  localStorage.setItem("ramschPlayedCount", ramschPlayedCount);
  localStorage.setItem("sauspielPlayedCount", sauspielPlayedCount);
  localStorage.setItem("totalGamesPlayedCount", totalGamesPlayedCount);
  setStats();
}



function resetSpielstände(){

  let SecureKey = window.prompt("Wenn du Sicher bist schreibe RESET")

  if (SecureKey != "RESET") {
    return
  }


  spieler.forEach((element, index)=> {
    	element.spielstand = 0;
  })
  saveSpielstände()

}

function resetStats(){
  let SecureKey = window.prompt("Wenn du Sicher bist schreibe RESET")

  if (SecureKey != "RESET") {
    return
  }

  wenzPlayedCount = 0;
  soloPlayedCount = 0;
  ramschPlayedCount = 0;
  sauspielPlayedCount = 0;
  totalGamesPlayedCount = 0;
  saveCounts();
}


function testIfonePlayerIsWinnerAndLoser () {
  for (let i = 1; i<= spieler.length; i++) {
    let testdWinnerCheckbox = document.getElementById(`spieler${i}WinnerCheckbox`);
  }
}


//modal setting
newGameModalOpenButton.addEventListener("click", () => {
  newGameModal.classList.add("open");
});

newGameModalCloseButton.addEventListener("click", () => {
  newGameModal.classList.remove("open");
})

newGameFertigButton.addEventListener("click", ()=> {
  newGameModal.classList.remove("open");
  wertefestlegen();
  settingWinnerModal.classList.add("open");
})

settingWinnerModalCloseButton.addEventListener("click", () => {
  settingWinnerModal.classList.remove("open");

})

statsModalOpenButton.addEventListener("click", ()=> {
  if (totalGamesPlayedCount === 0){
    window.alert("Trage zuerst ein Spiel ein")
    return
  }
  statsModal.classList.add("open");
})

statsModalCloseButton.addEventListener("click", () => {
  statsModal.classList.remove("open");
})






