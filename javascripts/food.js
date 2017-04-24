console.log("whohoo");


var dogFoodData = new XMLHttpRequest();

dogFoodData.addEventListener("load", dogFoodLoaded);
dogFoodData.addEventListener("error", dogFoodError);

function dogFoodLoaded(event) {
    var data = JSON.parse(event.target.responseText);
    dogDataDisplayed(data);
};

function dogDataDisplayed(eventArray) {
    var dogDiv = document.getElementById("dog-food");
    var dogString = " ";
    for (objects in eventArray) {
        var dogItems = eventArray[objects];
        console.log("dog items", dogItems);

        for (keysName in dogItems) {
            dogString += "<div>";
            dogString += "<h3>" + dogItems[keysName].name + "</h3>";
            var object2 = dogItems[keysName].types;
            for (price in object2) {
                dogString += "<div>" + object2[price].type + "</div>";

                var volumesObject = object2[price].volumes;

                for (volume in volumesObject) {
                    dogString += "<div>" + volumesObject[volume].name + "</div>";
                    dogString += "<div>" + volumesObject[volume].price + "</div>";
                }
            }
        }
    }
    dogDiv.innerHTML = dogString;
}


function dogFoodError(event) {
    console.log("data did not load for dog food");
}

dogFoodData.open("GET", "food.json");
dogFoodData.send();

var catFoodData = new XMLHttpRequest();

catFoodData.addEventListener("load", catFoodLoad);
catFoodData.addEventListener("error", catFoodError);


function catFoodLoad (event) {
    var catData = JSON.parse(event.target.responseText);
    catFoodDisplayed(catData);
}

function catFoodDisplayed (event) {
    var catDiv = document.getElementById("cat-food");
    var catString = " ";
    for (objects in event) {
        var catItems = event[objects];
        console.log("cat Items", catItems);


        for (objects2 in catItems) {
            catString += "<div>";
            catString += "<h3>" + catItems[objects2].name + "</h3>";
            var events3 = catItems[objects2].types;

            for (objects3 in events3) {
                catString += "<div>" + events3[objects3].type + "</div>";

                var newItems = events3[objects3].volumes;

                for (objects4 in newItems) {
                    catString += "<div>" + newItems[objects4].name + "</div>";
                    catString += "<div>" + newItems[objects4].price + "</div>";
                    catString += "</div>";
                }
            }
        }
    }
    catDiv.innerHTML = catString;
}


function catFoodError (event) {
    console.log("cat food data did not load")
}

catFoodData.open("GET", "cat.json");
catFoodData.send();




























