const WIDTH = 800; // canvas elementets bredd
const HEIGHT = 600; // canvas elementets höjd

let canvas = document.createElement('canvas'); // skapa canvaselementet
let ctx = canvas.getContext('2d'); // spara canvaselementets context, vi behöver det för att kunna rita
canvas.setAttribute("class", "border"); // ge canvas klassen border så vi markerar ut det
canvas.width  = WIDTH; // sätt elementets bredd
canvas.height = HEIGHT; // ... & höjd

ctx.fillStyle = "red"; // fill
ctx.fillRect(100, 300, 100, 100); // fyll en rektangel, X Y bredd höjd

ctx.fillStyle = "blue"; // fill
ctx.fillRect(200, 200, 200, 200); // fyll en rektangel, X Y bredd höjdctx
ctx.lineWidth = "2";
ctx.strokeRect(200,200,200,200);

ctx.beginPath(); // börja en path, krävs för detta
ctx.arc(200, 75, 50, 0, 2 * Math.PI); // se funktionen för mer information
ctx.fillStyle = "yellow"; // färg
ctx.lineWidth = "2"; // linjens bredd
ctx.stroke(); // rita stroke
ctx.fill(); // fyll

ctx.font = "20px Arial"; // typsnitt och storlek, du kan använda typsnitt du länkar in från google fonts
ctx.fillStyle = "rgba(255,200,100,200)"; // färg
ctx.globalAlpha = 0.8;
ctx.textAlign = "center"; // align på texten, här center för att vi placerar den i canvas mitt
ctx.fillText("Text på canvas", canvas.width / 2, 50);

ctx.font = "20px Comics sans"; // typsnitt och storlek, du kan använda typsnitt du länkar in från google fonts
ctx.fillStyle = "rgba(255,200,100,200)"; // färg
ctx.textAlign = "left"; // align på texten, här center för att vi placerar den i canvas mitt
ctx.fillText("Hello world", 20, 200);

for(var i=0;i<160; i = i + 40)
    {
        ctx.beginPath();
        ctx.moveTo(400 + i, 400 + i); // linjens startpunkt, X Y
        ctx.lineTo(600 + i, 550 + i); // linjens slutpunkt, X Y
        ctx.strokeStyle = getRandomColor(0.8); // slumpa en färg
        ctx.lineWidth = "4"; // linjens bredd
        ctx.stroke();   
    }


let img = new Image();
img.src = 'img/nti-logo.png';
img.onload = function() {
    ctx.drawImage(img, 400, 150, 256, 256);
};



let body = document.getElementsByTagName('body')[0]; // hämta main elementet från vårt HTML dokument
body.appendChild(canvas); // lägg till canvaselementet i main i HTML dokumentet

function getRandomColor(alpha) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + "," +  (alpha ? alpha : 1) + ")";
}