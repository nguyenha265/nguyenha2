function chuyen() {
    let p = document.getElementById("a").value;
    let c1 = document.getElementById('b1');
    let c2 = document.getElementById('b2');
    let d1 = c1.options[c1.selectedIndex].value;
    let d2 = c2.options[c2.selectedIndex].value;
    if (d1 == "a2" && d2 == "a5") {
        result = p * 1
    }
    if (d1 == "a2" && d2 == "a4") {
        result = p / 19.6
    }
    if (d1 == "a2" && d2 == "a6") {
        result = p / 155.3
    }
    if (d1 == "a1" && d2 == "a4") {
        result = p * 1
    }
    if (d1 == "a1" && d2 == "a5") {
        result = p * 19.6
    }
    if (d1 == "a1" && d2 == "a6") {
        result = p * 7.91
    }
    if (d1 == "a3" && d2 == "a4") {
        result = p / 7.91
    }
    if (d1 == "a3" && d2 == "a5") {
        result = p * 155.3
    }
    if (d1 == "a3" && d2 == "a6") {
        result = p * 1
    }
    let l = document.getElementById("i");
    i.innerText = "result  " +result.toString();

}


