 // Remove the <main id="main"> element from the page
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> to 'victory'
newHeader.id = 'victory';

// Set the text inside the <h1> element
newHeader.textContent = "Sal is the champion";

// Append the new <h1> to the body
document.body.append(newHeader);