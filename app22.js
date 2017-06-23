'use-strict';
var storedCustomers = JSON.parse(localStorage.getItem('unFilledOrder'));

var unOrderOne = document.getElementById('unfilledOrderOne');
var button;

function render() {

  for (var i = 0; i < storedCustomers.length; i++) {
    var div = document.createElement('div');
    div.id = (storedCustomers[i].phoneNumber);
    var pEl = document.createElement('p');
    var p2El = document.createElement('p');
    var p3El = document.createElement('p');
    var p4El = document.createElement('p');
    var p5El = document.createElement('p');
    pEl.textContent = 'Name: ' + storedCustomers[i].fullName;
    p2El.textContent = 'Address: ' + storedCustomers[i].streetAddress + ' , ' + storedCustomers[i].city + ' , ' + storedCustomers[i].fullState + ' , ' + storedCustomers[i].zip;
    p3El.textContent = 'Phone Number: ' + storedCustomers[i].phoneNumber;
    p4El.textContent = 'Item Type: ' + storedCustomers[i].item;
    p5El.textContent = 'Credit Card Number: ' + storedCustomers[i].creditCard;
    imgEl = document.createElement('img');
    imgEl.src = storedCustomers[i].img;
    div.appendChild(imgEl);
    div.appendChild(pEl);
    div.appendChild(p2El);
    div.appendChild(p3El);
    div.appendChild(p4El);
    div.appendChild(p5El);
    button = document.createElement('button');
    button.id = storedCustomers[i].phoneNumber;
    button.textContent = 'Order Complete';
    div.appendChild(button);
    button.addEventListener('click', remove);
    unOrderOne.appendChild(div);
  };
};

function remove(event) {
  document.preventDefault;
  for (var i = 0; i < storedCustomers.length; i++)
    if (event.target.id === storedCustomers[i].phoneNumber) {
      var deleteDiv = document.getElementById(event.target.id);
      localStorage.removeItem(event.target.id);
      deleteDiv.innerHTML = '';


    }
}
render();
