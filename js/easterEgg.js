let word = 'goose';
let input = 0;

document.onkeyup = function (x) {
    if (word.charAt(input) != x.key) {
        input = 0;
        return;
    }

    input++;
    if (input == word.length) {
        ShowGoose();
    }
}

function ShowGoose() {
    window.location.href = "easterEgg.html";
}