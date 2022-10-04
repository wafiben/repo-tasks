let buttonPlus = document.querySelector("#increment");
let quantity = document.getElementById("quantity");
let minusButton = document.querySelector("#decrement");
let deleteButtons = document.querySelectorAll(".delte-btn");
let bigContents = document.querySelectorAll(".big-content");
console.log(bigContents)

/* 
buttonPlus.addEventListener("click", function () {
  quantity.innerHTML++;
});
minusButton.addEventListener("click", function () {
  if (quantity.innerHTML != 0) {
    quantity.innerHTML--;
  } else {
    alert(" quantgity should not be negative");
  }
});
deleteButton.addEventListener("click", function () {
  bigContent.remove();
}); */
for(let i=0;i<deleteButtons.length;i++){
    deleteButtons[i].addEventListener('click',function(){
        bigContents[i].remove()
    })
}