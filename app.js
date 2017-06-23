'use-strict';
var allOrders = [];
var allItems = [];
var ordersInput = document.getElementById('buyProduct');

function Customer(item, quantity, fullName, address, phoneNumber, creditCard) {
  this.item = item;
  this.quantity = quantity;
  this.fullName = fullName;
  this.address = address;
  this.phoneNumber = phoneNumber;
  this.creditCard = creditCard;
  this.img = 'img/' + this.item + '.jpg';
  allOrders.push(this);
}

var dropDown = document.getElementById('itemDropDown');

function formSubmission(e) {
  event.preventDefault();
  var item = itemDropDown.options[itemDropDown.selectedIndex].value;
  var quantity = parseInt(event.target.quantity.value);
  var fullName = event.target.fullName.value;
  var address = event.target.address.value;
  var phoneNumber = event.target.phoneNumber.value;
  var creditCard = event.target.creditCard.value;
  new Customer(item, quantity, fullName, address, phoneNumber, creditCard);

  localStorage.setItem('unFilledOrder', JSON.stringify(allOrders));

  event.target.quantity.value = null;
  event.target.fullName.value = null;
  event.target.phoneNumber.value = null;
  event.target.creditCard.value = null;
}

ordersInput.addEventListener('submit', formSubmission);

//****************
var storedCustomers = JSON.parse(localStorage.getItem('unFilledOrder'));
var unOrderOne = document.getElementById('unfilledOrderOne');

// function renderCustomer() {
//   pEl = document.createElement('p');
//   pEl.textContent = storedCustomers;
//   console.log(storedCustomers);
//   unOrderOne.appendChild(pEl);
//
//   newArray.push(storedCustomers);
// };
// var newArray = [];
