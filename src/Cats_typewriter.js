let i = 0;
let row_one = "The Lead Pawformance Analysts!";
let speed = 100;
let typingRow = 1;

function typeWriter() {
    if (typingRow === 1 && i < row_one.length) {
        document.getElementById("typing_cats").innerHTML += row_one.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
}
typeWriter();
