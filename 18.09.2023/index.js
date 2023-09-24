const prompt = require("prompt-sync")({ sigint: true });


function dodawanie(a1, a2) {
    return a1 + a2;
}

function odejmowanie(a1, a2) {
    return a1 - a2;
}

function mnozenie(a1, a2) {
    return a1 * a2;
}

function dzielenie(a1, a2) {
    return a1 / a2;
}

var x = Number(1);

while (x == 1) {
    console.log('==========KALKULATOR==========\n');
    console.log('Jakie dzialanie chcesz wykonac: \n');
    console.log('1. Dodawanie\n');
    console.log('2. Odejmowanie\n');
    console.log('3. Mnozenie\n');
    console.log('4. Dzielenie\n');

    const wybor = Number(prompt("Wybor: "));

    console.clear();
    console.log("Podaj 1 liczbe: ");
    const l1 = Number(prompt(""));
    console.log("Podaj 2 liczbe: ");
    const l2 = Number(prompt(""));

    switch (wybor) {
        case 1:
            console.log(`Wynik dodawania ${l1} + ${l2} = ${dodawanie(l1, l2)}`);
            break;
        case 2:
            console.log(`Wynik odejmowania ${l1} - ${l2} = ${odejmowanie(l1, l2)}`);
            break;
        case 3:
            console.log(`Wynik mnozenia ${l1} * ${l2} = ${mnozenie(l1, l2)}`);
            break;
        case 4:
            console.log(`Wynik dzielenia ${l1} / ${l2} = ${dzielenie(l1, l2)}`);
            break;
    }

    console.log("\nCzy chcesz kontynuowac? Tak: 1, Nie: 0");
    x = Number(prompt(""));
    console.clear();
}
