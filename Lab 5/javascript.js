// This array will store all added infos
let infoList = [];

let infoInput = document.getElementById("infoInput");
let typeSelect = document.getElementById("typeSelect");
let previewBox = document.getElementById("previewBox");
let savedOutput = document.getElementById("savedOutput");
let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let additionalField = document.getElementById("additionalField");

// When the dropdown changes, update the input field based on selected type
typeSelect.addEventListener("change", function () {
    let type = typeSelect.value;
    additionalField.innerHTML = ""; // Clear previous input field

    if (type === "Text") {
        let inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("id", "dynamicInput");
        additionalField.appendChild(inputText);
    } else if (type === "DOB") {
        let inputDate = document.createElement("input");
        inputDate.setAttribute("type", "date");
        inputDate.setAttribute("id", "dynamicInput");
        additionalField.appendChild(inputDate);
    } else if (type === "Radio button") {
        let inputRadio1 = document.createElement("input");
        inputRadio1.setAttribute("type", "radio");
        inputRadio1.setAttribute("name", "gender");
        inputRadio1.setAttribute("value", "Male");
        let label1 = document.createElement("label");
        label1.innerText = "Male";

        let inputRadio2 = document.createElement("input");
        inputRadio2.setAttribute("type", "radio");
        inputRadio2.setAttribute("name", "gender");
        inputRadio2.setAttribute("value", "Female");
        let label2 = document.createElement("label");
        label2.innerText = "Female";

        additionalField.appendChild(inputRadio1);
        additionalField.appendChild(label1);
        additionalField.appendChild(inputRadio2);
        additionalField.appendChild(label2);
    } else if (type === "Number") {
        let inputNumber = document.createElement("input");
        inputNumber.setAttribute("type", "number");
        inputNumber.setAttribute("id", "dynamicInput");
        additionalField.appendChild(inputNumber);
    }
});

// When user clicks Add
addBtn.addEventListener("click", function () {
    let infoText = infoInput.value.trim();
    let typeText = typeSelect.value;
    let dynamicInput = document.getElementById("dynamicInput");

    // Check if input is valid based on selected type
    if (infoText === "") {
        alert("Please write something in Info field.");
        return;
    }

    // Handle adding value based on type
    let fullText = infoText + " - " + typeText + " - ";
    if (typeText === "Text" || typeText === "Number") {
        fullText += dynamicInput.value || "Please enter valid information.";
    } else if (typeText === "DOB") {
        fullText += dynamicInput.value || "Please select a date.";
    } else if (typeText === "Radio button") {
        let selectedGender = document.querySelector('input[name="gender"]:checked');
        fullText += selectedGender ? selectedGender.value : "Please select a gender.";
    }

    // Store in array
    infoList.push(fullText);

    // Show in preview box
    previewBox.value = infoList.join("\n");

    // Clear the info input
    infoInput.value = "";
});

// When user clicks Save
saveBtn.addEventListener("click", function () {
    // Clear previous output
    savedOutput.innerHTML = "";

    // Show all infos sequentially
    for (let i = 0; i < infoList.length; i++) {
        let p = document.createElement("p");
        p.textContent = (i + 1) + ". " + infoList[i];
        savedOutput.appendChild(p);
    }
});
