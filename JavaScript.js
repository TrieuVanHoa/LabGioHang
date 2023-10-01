/* Truyền giá trị vào 1  */
function calculator() {
    let dg = parseFloat(window.document.getElementById("dg").value);
    let sl = parseFloat(window.document.getElementById("sl").value);
    let Ma = parseFloat(window.document.getElementById("Ma").value);
    window.document.getElementById("tt").innerHTML = dg * sl;

    if (Ma == null) {
        window.document.getElementById("discount").innerHTML = dg * sl;
    }
    else {
        window.document.getElementById("discount").innerHTML = dg * sl - (dg * sl * Ma / 100);
    }

}



/* Truyển giá trị vào 1 thẻ HTML */
function calculator2() {
    let dg2 = parseFloat(window.document.getElementById("dg2").value);
    let sl2 = parseFloat(window.document.getElementById("sl2").value);
    window.document.getElementById("tt2").innerHTML = dg2 * sl2;
}

