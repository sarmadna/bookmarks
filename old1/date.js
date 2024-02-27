function currentDate() {
    let date = new Date();
    let dd = date.getDate();
    let mmm = date.toLocaleString("default", {month: "short"});
    let yy = date.toLocaleString("default", {year: "2-digit"});

    dd = (dd < 10) ? "0" + dd : dd;

    let today = dd + "-" + mmm + "-" + yy;

    document.getElementById("date").innerText = today;
    let t = setTimeout(function(){currentDate() }, 1000);
}
currentDate();
