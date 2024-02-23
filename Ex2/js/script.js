function calculateDistance(x0, y0, x1, y1) {
    let distanceA = Math.sqrt(Math.pow(x0, 2) + Math.pow(y0, 2));
    let distanceB = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

    if (distanceA > distanceB) {
        return "Точка А є найбільш віддаленою від початку координат.";
    } else if (distanceB > distanceA) {
        return "Точка В є найбільш віддаленою від початку координат.";
    } else {
        return "Обидві точки мають однакову відстань від початку координат.";
    }
};

let x0Input = prompt("Введіть координату x для точки А:");
let y0Input = prompt("Введіть координату y для точки А:");
let x1Input = prompt("Введіть координату x для точки В:");
let y1Input = prompt("Введіть координату y для точки В:");

//Те що нижче, потрібно, щоб при null значення не набувало NaN та не робило з формули кашу.
let x0 = x0Input ? parseFloat(x0Input) : 0;
let y0 = y0Input ? parseFloat(y0Input) : 0;
let x1 = x1Input ? parseFloat(x1Input) : 0;
let y1 = y1Input ? parseFloat(y1Input) : 0;

console.log(calculateDistance(x0, y0, x1, y1));
