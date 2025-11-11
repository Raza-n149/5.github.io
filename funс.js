document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button1");
    const result = document.getElementById("result");
    
    button.addEventListener("click", function(event) {
        event.preventDefault();
        
        const input = document.getElementsByName("field1")[0];
        const select = document.getElementsByName("select1")[0];
        const value = input.value.trim();
        
        console.log("Кнопка нажата"); // Для отладки
        console.log("Введенное значение:", value); // Для отладки
        console.log("Выбранный вариант:", select.value); // Для отладки
        
        // Проверка на пустое значение
        if (value === "") {
            result.innerHTML = "введите значение";
            return;
        }
        
        // Проверка на число
        if (!/^\d+$/.test(value)) {
            result.innerHTML = "некорректное значение";
            return;
        }
        
        const numberValue = parseInt(value);
        let total = 0;
        
        // Расчет стоимости
        switch(select.value) {
            case "v1":
                total = numberValue * 320;
                break;
            case "v2":
                total = numberValue * 2;
                break;
            case "v3":
                total = numberValue * 1100;
                break;
            case "v4":
                total = numberValue * 210;
                break;
            default:
                total = 0;
        }
        
        result.innerHTML = total + " руб.";
        console.log("Результат:", total); // Для отладки
    });
});
