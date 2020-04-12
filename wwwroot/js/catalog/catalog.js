
function fetchCatalog() {
    console.log("Fetching Catalog");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server", res);

            //TODO: sort the cars (res array) from cheapest to most expensive
            var sorted = [];
            sorted = res.sort( function(left, right){
                //if left printed first -1, if right is first print 0 
                if(left.dailyPrice < right.dailyPrice){
                    return -1;  //first param goes first
                }
                else if (right.dailyPrice < left.dailyPrice){
                    return 1;
                }

                return 0;
            });
           
            // sorted = res.sort((a,b) => a.dailyPrice - b.dailyPrice));  */

            for (var i = 0; i < sorted.length; i++) {
                var car =sorted[i];
                displayCar(car);
            }

        },
        error: function (details) {
            console.log("Error:", details);
        }
    })

}

function displayCar(car) {

    var template =
        `<div class = "item"> 
           <img src='${car.imageUrl}'>
            ${car.make}
            ${car.model}
            ${car.year}
            ${car.dailyPrice}
            </div>`;

    var container = $("#catalog");

    container.append(template);
}


function init() {
    console.log("Catalog page!");

    fetchCatalog();

}

window.onload = init;