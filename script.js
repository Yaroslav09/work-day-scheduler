let currentDayNow = dayjs().format('dddd, MMMM D, YYYY');
let currentDay = document.getElementById("currentDay").innerText = currentDayNow;


function backgroundAllHours() {
    let hour = dayjs().format('HH');
    let listHours = document.querySelectorAll("[data-content]");         

    listHours.forEach(function(element) {      
      let dataValue = element.getAttribute('data-content');
      let textareaBackground = document.querySelector(`textarea[data-content="${dataValue}"]`);

      if (dataValue < hour) {  
        if (textareaBackground) {
          textareaBackground.classList.add("past");
        }
      }
      if (dataValue === hour) {                    
        if (textareaBackground) {
          textareaBackground.classList.add("present");
        }
      }

      if (dataValue > hour) { 
        if (textareaBackground) {
          textareaBackground.classList.add("future");
        }
      }       
    });    
}
backgroundAllHours();

$(document).ready (function () {
    $("*[data-content]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-content")));
    });

    $("*[data-content]").on("keyup", function (itm) {
      localStorage.setItem ("item-" + $(this).attr("data-content"), $(this).val());
    })
  })