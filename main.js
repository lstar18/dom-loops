console.log("Dom-Loops");
const dinosaurs = [
    {type:'T-rex', name:'Wrex'},
    {type:'Stegosaurus', name:'Steve'},
    {type:'Velociraptor', name:'Val'}
];
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;

}
const buildDinoCards = () => {
    let domString = '';
    for(let i= 0; i <dinosaurs.length; i++) {
        domString += '<div class="dinosaurs">';
        domString += `<h3>${dinosaurs[i].type}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString +='</div>';
    }
printToDom('dino-barn', domString);
};

buildDinoCards();