var accordeon = document.getElementsByClassName("accordion");

for (i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener("click", function () {

        var shown = this.classList.toggle("active");

        var symbol = (this.getElementsByClassName("symbol"))[0];
        var panel = this.nextElementSibling;

        if (shown) {
            symbol.innerHTML = "-";
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            symbol.innerHTML = "+";
            panel.style.maxHeight = null;
        }
    });
}