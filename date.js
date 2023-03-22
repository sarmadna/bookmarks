function currentDate() {
    let date = new Date();
    let day = date.toLocaleString("default", {weekday: "long"});
    let dd = date.getDate();
    let mmm = date.toLocaleString("default", {month: "short"});

    dd = (dd < 10) ? "0" + dd : dd;

    let today = day + ", " + mmm + " " + dd;

    document.getElementById("date").innerText = today;
    let t = setTimeout(function(){currentDate() }, 1000);
}
currentDate();
