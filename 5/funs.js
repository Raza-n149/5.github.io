function click1(event) {
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");
    let m = f1[0].value;
    if (s[0].value === "v1") {
        r.innerHTML = f1[0].value * 320;
    }
    if (s[0].value === "v2") {
        r.innerHTML = f1[0].value * 2;
    }
    if (s[0].value === "v3") {
        r.innerHTML = f1[0].value * 1100;
    }
    if (s[0].value === "v4") {
        r.innerHTML = f1[0].value * 210;
    }
    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
    }
    event.preventDefault();
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});