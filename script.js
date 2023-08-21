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

        let annualSalaryFormatted=parseFloat(annualSalaryInput).toLocaleString("en-US")

        $('#table-body').append(`<tr id="table-row"><td>${firstNameInput}</td><td>${lastNameInput}</td><td >${idInput}</td><td >${titleInput}</td><td id="annual-salary-data">$${annualSalaryFormatted}</td><td><button id="delete-button">Delete</button></td></tr>`)
        

        totalMonthly+=(parseFloat(annualSalaryInput)/12);
        console.log("totalMonthly:", totalMonthly);
        console.log("totalMonthly type:", typeof(totalMonthly));
        let formattedNumber = parseFloat(totalMonthly).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        console.log("formattedNumber is", formattedNumber)
        $('h4').text("Total Monthly: $" + formattedNumber)
        if (totalMonthly > 20000) {
            $('header').css({"background-color": "#722F37", "color": "white"})
            $('footer').css({"background-color": "#722F37", "color": "white"})
        } if (totalMonthly < 20000) {
        $('header').css({"background-color": "#F5F5DC", "color": "black"})
        $('footer').css({"background-color": "#F5F5DC", "color": "black"})
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
   $(this).remove();
   console.log("Annual Salary", $(this).find('#annual-salary-data').text())
   console.log("Annual Salary type:", typeof($(this).find('#annual-salary-data')));
   console.log("totalMonthly before:", totalMonthly);
   let annualSalaryUnformatted = $(this).find('#annual-salary-data').text().replace(/[$,]/g, "");
   console.log("annualSalaryUnformatted", annualSalaryUnformatted)
   let annualSalaryString= JSON.parse(annualSalaryUnformatted)
   totalMonthly-=(parseFloat(annualSalaryString)/12);
   console.log("totalMonthly after:", totalMonthly);
   console.log("totalMonthly type:", typeof(totalMonthly));
   let formattedNumber = parseFloat(totalMonthly).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
   console.log(formattedNumber);
   $('h4').text("Total Monthly: $" + formattedNumber)

   if (totalMonthly > 20000) {
    $('header').css({"background-color": "#722F37", "color": "white"})
    $('footer').css({"background-color": "#722F37", "color": "white"})
    } if (totalMonthly < 20000) {
    $('header').css({"background-color": "#F5F5DC", "color": "black"})
    $('footer').css({"background-color": "#F5F5DC", "color": "black"})
    }
}
//end deleteButton()