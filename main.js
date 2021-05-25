"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';

//     return html;
// }
// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     html += '<div>' + coffee.name +'</div>';
//     html += '<div>' + coffee.roast + '</div>';
//     html += '</div>';
//     return html;
// }

// added createElement instead html +=
function renderCoffee(coffee) {
    var html = document.createElement('li');
    // html.setAttribute('class', 'coffee');
    var child = document.createElement('div');
    child.innerHTML = `${coffee.name} ${coffee.roast} <a id="remove${coffee.id}" href="#">-</a>`;
    child.setAttribute('id', coffee.id);
    html.appendChild(child);
    return html.outerHTML;

}





// reworked the loop and reversed it to get ascending IDs
function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length - 1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    for(let i = 0; i < coffees.length; i++){
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

// function submitCoffee(e){
//     e.preventDefault();
// document.getElementById('coffee-add')
//     .addEventListener('click', addCoffee);
// }

// function to addCoffee
function addCoffee(e){

    e.preventDefault(); // make a copy of earlier functionality (wont refresh on submit);

    // create new variables getting values of what to add;
    var id = (coffees.length + 1);
    var roast = document.getElementById('roast-creation').value;
    var coffeeName = document.getElementById('coffee-add').value;

    // Create new object;
    var newObject = {
        id: id,
        name: coffeeName,
        roast: roast
    };

    coffees.push(newObject);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}


function mySearch() {
    let input, filter, ul, li, div, txtValue;
     input = document.getElementById('coffee-search');
     filter = input.value.toUpperCase();
     ul = document.getElementById('coffees');
     li = ul.getElementsByTagName('li');

    for(let i = 0; i < li.length; i++) {
         div = li[i].getElementsByTagName('div') [0];
         txtValue = div.textContent || div.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) { // if filter is inside of (indexin) then display else don't display
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}

var tbody = document.getElementById('coffees');
var submitButton = document.querySelector('#submit');
var submitCoffee = document.getElementById('add');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitCoffee.addEventListener('click', addCoffee);

submitButton.addEventListener('click', updateCoffees);



// removeButton();

// function removeButton(){
//     for(let i = 0; i < coffees.length; i++){
//         document.getElementById(`remove${i + 1}`).addEventListener('click', removeCoffee);
//     }
//
// }

// function removeCoffee(){
//     let a = document.getElementsByTagName('a');
//     console.log(a.length);
//     for(let i = 0; i< coffees.length; i++) {
//         if (coffees.id === a[i + 1]) {
//
//         }
//     }
//     console.log('test');
//     coffees.pop();
//     tbody.innerHTML = renderCoffees(coffees);
// }
