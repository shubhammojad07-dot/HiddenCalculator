let display = document.getElementById("display");

const secretPIN = "2580";
let pinInput = "";

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    pinInput = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    // Secret PIN check
    if (display.value === secretPIN) {
        openVault();
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function openVault() {
    document.getElementById("hiddenVault").style.display = "flex";
    display.value = "";
}

function closeVault() {
    document.getElementById("hiddenVault").style.display = "none";
}