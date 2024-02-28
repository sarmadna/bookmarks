function currentDate() {
    let date = new Date();
    let day = date.toLocaleString("default", {weekday: "short"});
    let dd = date.getDate();
    let mmm = date.toLocaleString("default", {month: "short"});
    let yy = date.toLocaleString("default", {year: "numeric"});

    dd = (dd < 10) ? "0" + dd : dd;

    let today = day + ", " + mmm + " " + dd;

    document.getElementById("date").innerText = today;
    let t = setTimeout(function(){currentDate() }, 1000);
}
currentDate();
