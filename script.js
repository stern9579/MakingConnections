function removeReq1() {
    document.querySelector("#todd").remove();
}

function removeReq2() {
    document.querySelector("#phil").remove();
}

function editChange () {
    var newName = "Elise Shumer";
    document.querySelector(".NewName").innerHTML = newName
    return newName
}