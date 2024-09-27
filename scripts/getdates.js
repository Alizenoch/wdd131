function getDate() {
    let date = new Date(document.lastModified);
    return "Last modification:\u00A0" + date;
}

document.getElementById("dat").innerHTML = getDate();
