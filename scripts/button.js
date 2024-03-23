let yellowButton = document.getElementById("color-btn-yellow");
let blueButton = document.getElementById("color-btn-blue");
let greenButton = document.getElementById("color-btn-green");

yellowButton.addEventListener("click", () => {
    document.body.style.background = defineLinearGradient("Yellow");
});

greenButton.addEventListener("click", () => {
    document.body.style.background = defineLinearGradient("Green");
});

blueButton.addEventListener("click", () => {
    document.body.style.background = defineLinearGradient("Blue");
});


function defineLinearGradient (color) {
    switch (color) {
        case "Yellow":
            return 'linear-gradient(135deg, #eddc6d, #abb021)';
        case "Green":
            return "linear-gradient(135deg, #9ced6d, #55b021)";
        case "Blue":
            return "linear-gradient(135deg, #6dd5ed, #2193b0)";
        default:
            return "linear-gradient(135deg, #6dd5ed, #2193b0)";
    }
}