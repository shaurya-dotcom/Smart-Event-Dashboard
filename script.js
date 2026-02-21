let addButton = document.getElementById("addBtn");
let eventList = document.getElementById("eventList");

addButton.addEventListener("click", function () {

    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let desc = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please fill Title and Date");
        return;
    }

    // Creating new div
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p>" + date + "</p>" +
        "<p>" + desc + "</p>" +
        "<button class='deleteBtn'>Remove</button>";

    eventList.appendChild(newCard);

    // clearing input fields
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
});


// Event Delegation
eventList.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
});

console.log(eventList.children);
console.log(eventList.firstElementChild);
