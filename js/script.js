"use strict";

var divJSONUitgebreid;
var slcLocatie;

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelElementen();
  VulSelect();
  KoppelEvents();
  slcLocatie.selectedIndex = 0;
  ToonDetails("BST1");
}

const KoppelElementen = () => {
  divJSONUitgebreid = document.getElementById("divJSONUitgebreid");
  slcLocatie = document.getElementById("slcLocatie");
}

const KoppelEvents = () => {
  slcLocatie.addEventListener('change', () => {
    let index = slcLocatie.selectedIndex;
    let locatie = slcLocatie[index].value;
    ToonDetails(locatie);
  });
}

const VulSelect = () => {
  for (let locatie in dataLessen) {
    slcLocatie.options[slcLocatie.length] = new Option(locatie, locatie);
  }
}

const ToonDetails = (locatieNaam) => {

}





