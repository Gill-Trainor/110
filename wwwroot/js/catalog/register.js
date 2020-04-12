

function Car(email, phone, make, model, year, dailyPrice, cyls, city, state, zip, startDate, endDate) {
    this.email = email;
    this.phone = phone;
    this.make = make;
    this.model = model;
    this.year = year;
    this.dailyPrice = dailyPrice;
    this.cyls = cyls;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.startDate = startDate;
    this.endDate = endDate;
}


function clearForm() {
    $("txtEmail").val();
    $("txtPhone").val();
    $("#txtMake").val();
    $("txtModel").val();
    $("txtYear").val();
    $("txtDailyPrice").val();
    $("txtCyls").val();
    $("txtCity").val();
    $("txtState").val();
    $("txtZip").val();
    $("txtStartDate");
    $("txtEndDate");
}


function saveCar() {
    console.log("saving car");

    var email = $("#txtEmail").val();
    var phone = $("#txtPhone").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var dailyPrice = $("#txtDailyPrice").val();
    var cyls = $("#txtCyls").val();
    var city = $("#txtCity").val();
    var state = $("#txtState").val();
    var zip = $("#txtZip").val();
    var startDate = $("#txtStartDate");
    var endDate = $("#txtEndDate");


    var theCar = new Car(email, phone, make, model, year, dailyPrice, cyls, city, state, zip, startDate, endDate);
    console.log(theCar);
    var jsonString = JSON.stringify(theCar);

    $.ajax({
        url: '/catalog/saveCar',
        type: "POST",
        data: JSON.stringify(theCar),
        contentType: "application/json",
        success: function (res) {
            console.log("Yay, it works!", res);
            clearForm();
        },
        error: function (details) {
            console.log("Error", details);
        }

    });
}


function init() {
    console.log("Register car page!");

    $("#btnSave").click(saveCar);
}

window.onload = init;

//TODO:
/**
 * link JS with register html
 * check the id of the button
 * create the Car object
 * send the object on a POST ajax request
 * create the backed for POST saveCar
 */