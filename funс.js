function click1(event) {
    event.preventDefault();
    
    let f1 = document.getElementsByName("field1")[0];
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1")[0];
    let m = f1.value;
    
    // Проверка на корректность ввода
    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
        return false;
    }
    
    let value = parseInt(m);
    let result = 0;
    
    // Вычисления
    if (s.value === "v1") {
        result = value * 320;
    } else if (s.value === "v2") {
        result = value * 2;
    } else if (s.value === "v3") {
        result = value * 1100;
    } else if (s.value === "v4") {
        result = value * 210;
    }
    
    r.innerHTML = result;
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});
