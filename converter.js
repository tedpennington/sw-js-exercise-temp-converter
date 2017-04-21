console.log("Hello JS")

// Define Global Variables
var tempInput = document.getElementById("temp-input");
var fSelected = document.getElementById("f-selected");
var cSelected = document.getElementById("c-selected");
var convertedTemp = document.getElementById("converted-temp");
var submitButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");

// Functions:

// Check which radio is selected and run corresponding converter function, passing it the value
function determineConverter(){
    // console.log("fSelected.checked", fSelected.checked);
    if(fSelected.checked){
        // console.log("toFahrenheit");
        toFahrenheit(tempInput.value);
    }else {
        // console.log("toCelsius");
        toCelsius(tempInput.value);
    }
}

// Clear Input Field
function clearField(){
    tempInput.value = "";
}
// Validate Input Field (check that something's in there)

// ABANDONED
// *****Look up RegEx in this validation*****
// function fieldValidate(){
//     if(typeof(parseInt(tempInput.value)) != "number"){
//         alert("Aww snap, that's not a number");
//         } else{
//             determineConverter();
//     }
// }


// Converters
function toFahrenheit (temp) {
    console.log("temp in toFahrenheit", temp);
    var cTemp = (temp * 1.8) + 32;
    changeColor(cTemp, "f");
}
function toCelsius (temp) {
    console.log("temp in toCelsius", temp);
    var fTemp = (temp - 32) / 1.8;
    changeColor(fTemp, "c");
}

// Change color based on temp, doing so for each temp scale (F/C)
function changeColor (temp, scale) {
    // console.log("temp", temp, "scale", scale);
    convertedTemp.classList.remove("red", "blue", "green")
    if(scale === "f"){
        if(temp > 90){
            convertedTemp.classList.add("red");
        } else if(temp < 32){
            convertedTemp.classList.add("blue");
        } else {
            convertedTemp.classList.add("green");
        }
    }else {
        if(temp > 32){
            convertedTemp.classList.add("red");
        } else if(temp < 0){
            convertedTemp.classList.add("blue");
        } else {
            convertedTemp.classList.add("green");
        }
    }
    outputResult(temp);
}

// Output result
function outputResult(temp){
    convertedTemp.innerHTML = `<p>${temp}</p>`;
}

submitButton.addEventListener("click", determineConverter)


// Instructions:
//Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// 1. In the HTML, have one input field where someone can enter in a temperature.
// 2. Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// 3. Create a block level element that will hold the text of the converted temperature.
// 4. Create a button that, when clicked, displays the converted temperature.
// 5. Create another button that, when clicked, clears any text in the input field.
// 6. Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// 7. If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// 8. If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// 9. For any other temperature, the color should be green.



// function toCelsius () {

// }

// function toFahrenheit () {

// }

// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);