var showEndDate = "12 March 2024 06:30:00 PM"
document.getElementById("endDate").innerText = showEndDate;

var inputs = document.querySelectorAll("input")
    
function clock() {
    var end = new Date(showEndDate)
    var now = new Date()
    var diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock()


setInterval(
    () => {
        clock()
    },
    1000
)