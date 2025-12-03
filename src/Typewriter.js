let i = 0;
let row_one = "A CRO Analyst with a background in Life Science";
let row_two = "Let's roll out some test variants!";
let row_three = "👇";
let speed = 100;
let typingRow = 1;

function typeWriter() {
    const typingEl = document.getElementById("typing");

    if (typingRow === 1 && i < row_one.length) {
        typingEl.innerHTML += row_one.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
    else if (typingRow === 1 && i === row_one.length) {
        typingEl.innerHTML += "<br/><span style='font-weight: bold;' id='row-two'></span>"; 
        typingRow = 2;
        i = 0;
        setTimeout(typeWriter, speed);
    } 
    else if (typingRow === 2 && i < row_two.length) {
        document.getElementById("row-two").innerHTML += row_two.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (typingRow === 2 && i === row_two.length) {
        typingEl.innerHTML += "<br/><span id='row-three'></span>";
        typingRow = 3;
        i = 0;
        setTimeout(typeWriter, speed);
    }
    else if (typingRow === 3 && i < row_three.length) {
        document.getElementById("row-three").innerHTML += row_three.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
