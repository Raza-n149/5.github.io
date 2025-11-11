window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});

function click1() {
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");
    let m = f1[0].value;
    
    // Проверка на корректность ввода
    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
        return false;
    }
    
    let quantity = parseInt(m);
    let total = 0;
    
    // Расчет стоимости в зависимости от выбранного материала
    if (s[0].value === "v1") {
        total = quantity * 320;
    }
    if (s[0].value === "v2") {
        total = quantity * 2;
    }
    if (s[0].value === "v3") {
        total = quantity * 1100;
    }
    if (s[0].value === "v4") {
        total = quantity * 210;
    }
    
    r.innerHTML = total + " руб.";
    return false;
}
