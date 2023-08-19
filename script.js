$(document).ready(onReady);

function onReady() {
    $('.submit-button').on('click', getTheInput);
    $('#table-body').on('click', '#table-row', deleteButton)
}
//end onReady()

let totalMonthly = 0;

function getTheInput(event){
    event.preventDefault();
    console.log("In getTheInput function:");

    let firstNameInput = $('#first-name-input').val()
    console.log("firstNameInput is:", firstNameInput);

    let lastNameInput = $('#last-name-input').val()
    console.log("lastNameInput is:", lastNameInput)

    let idInput = $('#id-input').val()
    console.log("idInput is:", idInput)

    let titleInput = $('#title-input').val()
    console.log("titleInput is:", titleInput)

    let annualSalaryInput = $('#annual-salary-input').val()
    console.log("annualSalaryInput is:", annualSalaryInput)
    if (firstNameInput!= "" && lastNameInput != "" && idInput != "" && titleInput != "" && annualSalaryInput != "" ) {
        $('#first-name-input').val("")
        $('#last-name-input').val("")
        $('#id-input').val("")
        $('#title-input').val("")
        $('#annual-salary-input').val("")

        let annualSalaryFormatted=parseInt(annualSalaryInput).toLocaleString("en-US")

        $('#table-body').append(`<tr id="table-row"><td>${firstNameInput}</td><td>${lastNameInput}</td><td >${idInput}</td><td >${titleInput}</td><td >$${annualSalaryFormatted}</td><td><button id="delete-button">Delete</button></td></tr>`)
        

        totalMonthly+=parseInt(annualSalaryInput);
        console.log("totalMonthly:", totalMonthly)
        let formattedNumber = totalMonthly.toLocaleString("en-US")
        $('h4').text("Total Monthly: $" + formattedNumber)
        if (totalMonthly > 20000) {
            $('header').css({"background-color": "#722F37", "color": "white"})
            $('footer').css({"background-color": "#722F37", "color": "white"})
        }
    } else if (!isNaN(idInput) && !isNaN(annualSalaryInput)){
        alert("Please fill out ID and annual salary with only numbers.")
    }
    else {
        alert("Please fill out all input fields.")
    }
    }
//end getTheInput()

function deleteButton() {
   $('#table-row').remove();
  }
//end deleteButton()