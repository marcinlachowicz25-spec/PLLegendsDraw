// ===========================
// PL LEGENDS BIG GAMES DRAW
// Premium Edition
// ===========================

let players = [
"Zawodnik 1",
"Zawodnik 2",
"Zawodnik 3",
"Zawodnik 4",
"Zawodnik 5",
"Zawodnik 6",
"Zawodnik 7",
"Zawodnik 8",
"Zawodnik 9",
"Zawodnik 10",
"Zawodnik 11",
"Zawodnik 12",
"Zawodnik 13",
"Zawodnik 14",
"Zawodnik 15",
"Zawodnik 16",
"Zawodnik 17",
"Zawodnik 18",
"Zawodnik 19",
"Zawodnik 20",
"Zawodnik 21",
"Zawodnik 22",
"Zawodnik 23",
"Zawodnik 24",
"Zawodnik 25",
"Zawodnik 26",
"Zawodnik 27",
"Zawodnik 28",
"Zawodnik 29",
"Zawodnik 30",
"Zawodnik 31",
"Zawodnik 32",
"Zawodnik 33",
"Zawodnik 34",
"Zawodnik 35",
"Zawodnik 36",
"Zawodnik 37",
"Zawodnik 38",
"Zawodnik 39",
"Zawodnik 40",
"Zawodnik 41",
"Zawodnik 42",
"Zawodnik 43",
"Zawodnik 44",
"Zawodnik 45",
"Zawodnik 46",
"Zawodnik 47",
"Zawodnik 48",
"Zawodnik 49",
"Zawodnik 50"
];

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}

function drawFinalists(){

    let copy=[...players];

    shuffle(copy);

    let finalists=copy.slice(0,24);

    localStorage.setItem(
        "finalists",
        JSON.stringify(finalists)
    );

    displayFinalists(finalists);
}

function displayFinalists(list){

    const box=document.getElementById("finalists");

    if(!box) return;

    box.innerHTML="";

    list.forEach((name,index)=>{

        box.innerHTML+=`
        <div class="player">
            ${index+1}. ${name}
        </div>
        `;

    });

}

function resetDraw(){

    localStorage.removeItem("finalists");

    const box=document.getElementById("finalists");

    if(box){
        box.innerHTML="";
    }

}

window.onload=function(){

    let saved=localStorage.getItem("finalists");

    if(saved){

        displayFinalists(JSON.parse(saved));

    }

}
