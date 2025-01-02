var z1 = document.querySelector(".a2");
var z2 = document.querySelector(".aa");
var z3 = z2.querySelectorAll("div");

z1.addEventListener("keyup", function(event) {
    var z4 = event.target.value.toUpperCase();

    for (count = 0; count < z3.length; count = count + 1) {
        var h4Element = z3[count].querySelector("h4");
        if (h4Element) {
            var z5 = h4Element.textContent;
            if (z5.toUpperCase().indexOf(z4) < 0) {
                z3[count].style.display = "none";
            } else {
                z3[count].style.display = "block";
            }
        }
    }
});



