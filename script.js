let currentDayNow = dayjs().format('dddd, MMMM D, YYYY');

let currentDay = document.getElementById("currentDay").innerText = currentDayNow;

function saveInput() {
    let inputTaskText = document.getElementById("inputTaskText").value;
    let saveInputTaskText = localStorage.setItem("inputTaskText", inputTaskText);
}
