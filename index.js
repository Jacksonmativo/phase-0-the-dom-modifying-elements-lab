// Step 1: Remove the <main> element from the DOM
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of the new <h1> element to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of the new <h1> element
newHeader.textContent = "JacksonWA is the champion"; // Replace with your name

// Step 5: Append the new <h1> element to the body
document.body.appendChild(newHeader);
