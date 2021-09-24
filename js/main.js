"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee row align-items-center col-6 p-2">';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<h3 class="coffee-name">' + coffee.name + '</h3>';
    html += '<div class="ml-2 coffee-roast">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length - 1; i >= 0; i--) {
    for(var i = 0; i <= coffees.length - 1 ; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var inputCoffee = asTyped.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(inputCoffee)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var coffeeSearch = document.querySelector('#coffee-search');
var asTyped = document.querySelector('#coffee-search'); //adding this for bullet pt 4
var addBtn = document.getElementById("add"); //kh - grabbing add button

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
// coffeeSearch.addEventListener('change', searchCoffees);
asTyped.addEventListener('input', searchCoffees);
submitButton.addEventListener('click', searchCoffees);

addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var bonusInput = document.querySelector('#bonus-coffee-input').value;
    var bonusRoastType = document.querySelector('#bonus-roast-selection').value;
    coffees.push({id: (coffees.length + 1), name: bonusInput, roast: bonusRoastType});
    tbody.innerHTML = renderCoffees(coffees);
})