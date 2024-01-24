let currentDayNow = dayjs().format('dddd, MMMM D, YYYY');
let currentDay = document.getElementById("currentDay").innerText = currentDayNow;

$(document).ready (function () {
    $("*[data-content]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-content")));
    });

    $("*[data-content]").on("keyup", function (itm) {
      localStorage.setItem ("item-" + $(this).attr("data-content"), $(this).val());
    })
  })