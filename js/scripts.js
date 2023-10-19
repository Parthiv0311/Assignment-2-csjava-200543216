// constants for query selector
const studentIdElement = document.getElementById("myStudentId");
const customNumberElement = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelectElement = document.getElementById("imageSelect");
const imagesElement = document.getElementById("images");

// Constant to store the student ID
const studentId = "200543216";

// Array containing paths to the images
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function to determine the background color based on a value
function changeBackgroundColor(value) {
    // Using conditions to determine the color based on input value
    if (value < 0 || value > 100) {
        return "red";
    } else if (value <= 20) {
        return "green";
    } else if (value <= 40) {
        return "blue";
    } else if (value <= 60) {
        return "orange";
    } else if (value <= 80) {
        return "purple";
    } else {
        return "yellow";
    }
}

// Function to change background color based on custom input and display student ID
function changeCustomColor() {
    let inputValue = parseInt(customNumberElement.value);
    studentIdElement.textContent = studentId;
    document.body.style.backgroundColor = changeBackgroundColor(inputValue);
}

// Function to change background color based on a random value
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    studentIdElement.textContent = studentId;
    document.body.style.backgroundColor = changeBackgroundColor(randomValue);
}

// Function to populate the image dropdown when clicked
function addList() {
    // Ensuring the list does not duplicate options
    if (imageSelectElement.children.length === 1) { // only the initial option present
        imageArray.forEach((image, index) => {
            let option = document.createElement("option");
            option.value = image;
            option.textContent = `Image ${index + 1}`;
            imageSelectElement.appendChild(option);
        });
    }
}

// Function to change displayed image based on dropdown selection
function changeImage() {
    let selectedImage = imageSelectElement.value;
    imagesElement.src = "./img/" + selectedImage;
}

// Attaching event listeners for button clicks
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
imageSelectElement.addEventListener("click", addList);

// Event listener for changing dropdown selection
imageSelectElement.addEventListener("change", changeImage);

// Event listener for form validation on the custom number input
customNumberElement.addEventListener("input", function () {
    if (this.validity.rangeOverflow || this.validity.rangeUnderflow) {
        this.setCustomValidity("Please enter a number between 1 and 100.");
    } else {
        this.setCustomValidity("");
    }
});

// Extra Features

// Displaying a larger version of the image when clicked
imagesElement.addEventListener("click", function () {
    let modal = document.getElementById("imageModal");
    let modalImage = modal.querySelector("img");
    modalImage.src = this.src;
    modal.style.display = "block";
});

// Hiding the larger image modal when clicked
document.getElementById("imageModal").addEventListener("click", function () {
    this.style.display = "none";
});

// Toggle between dark and light mode
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

