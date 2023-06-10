// First we select all the list items, loop through them and add a event listner to figure out which lii is being dragged
const listItems = document.querySelectorAll("li");
// console.log(listItems);
listItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    console.log("added draggin")
    item.classList.add("dragging");
    // Adding dotted border to the 2nd container
    const dropContainer = document.querySelectorAll(".container")[1];
    dropContainer.style.border = "2px dotted"
  });
//When the drag end we remove the dragging className to update the ui;
  item.addEventListener("dragend", (e) => {
    const dropContainer = document.querySelectorAll(".container")[1];
    dropContainer.style.border = "2px solid"
    console.log("drag leave");
    item.classList.remove("dragging");
  });

});
//After drag end we implement the drop functionality by appending  the element to the container it is dropped in.
//We can get the container in which the li is dropped by adding the drag over event listner to all the containers by looping through them
const containers = document.querySelectorAll(".container");
containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const slelctedItem = document.querySelector(".dragging");
    const getUl = container.querySelector("ul");
    getUl.appendChild(slelctedItem);
  });
});

//this is to implement reset functionality. Whenever user click on the button the page is reloaded.
const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", e => {
  // console.log("button clicked")
  location.reload();
 
})

