const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// add click button function
function addTask() {
    if (inputBox.value === '') {
        alert("Input field is empty, please write task..!!");
    }
    else {
        let li = document.createElement("li");
        // add text inside the li tag
        li.innerHTML = inputBox.value;
        // display li tag in list-container 
        listContainer.appendChild(li);

        // add cross icon using span tag
        let span = document.createElement("span");
        // this is \u00d7 ==> cross
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // add value in input-box after value is clear
    inputBox.value = "";
    saveData();
}

// click perticular task this is check and uncheck or delete
if (listContainer) {
    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);
} else {
    console.error("Container not found");
}


// refresh page data ia not remove it is save in browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// close the browser then open, data ia not remove it is save in browser
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();