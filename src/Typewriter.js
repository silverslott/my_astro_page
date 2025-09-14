let i = 0;
let row_one = "A CRO Analyst with a background in Life Science";
let row_two = "Passionate about Experimentation!";
let speed = 100;
let typingRow = 1;

function typeWriter() {
    if (typingRow === 1 && i < row_one.length) {
        document.getElementById("typing").innerHTML += row_one.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } 
    else if (typingRow === 1 && i === row_one.length) {
        document.getElementById("typing").innerHTML += "<br/>";
        typingRow = 2;
        i = 0;
        setTimeout(typeWriter, speed);
    } 
    else if (typingRow === 2 && i < row_two.length) {
        document.getElementById("typing").innerHTML += row_two.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
