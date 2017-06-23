'use-strict';
var allOrders = [];
var allItems = [];
var ordersInput = document.getElementById('buyProduct');

function Customer(item, quantity, fullName, streetAddress, city, fullState, zip, phoneNumber, creditCard) {
  this.item = item;
  this.quantity = quantity;
  this.fullName = fullName;
  this.streetAddress = streetAddress;
  this.city = city;
  this.fullState = fullState;
  this.zip = zip;
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
  var streetAddress = event.target.streetAddress.value;
  var city = event.target.city.value;
  var fullState = event.target.fullState.value;
  var zip = event.target.zip.value;
  var phoneNumber = event.target.phoneNumber.value;
  var creditCard = event.target.creditCard.value;

  if (!event.target.quantity.value || !event.target.fullName.value || !event.target.streetAddress.value || !event.target.city.value || !event.target.fullState.value || !event.target.fullState.value || !event.target.phoneNumber.value || !event.target.zip.value) {
    return alert('Fields cannot be empty!');
  }

  if (event.target.creditCard.value.length < 16) {
    return alert('Please enter valid 16-digit credit card number!');
  
  }

  new Customer(item, quantity, fullName, streetAddress, city, fullState, zip, phoneNumber, creditCard);

  localStorage.setItem(allOrders[0].phoneNumber, JSON.stringify(allOrders));
  allOrders = [];

  event.target.quantity.value = null;
  event.target.fullName.value = null;
  event.target.phoneNumber.value = null;
  event.target.creditCard.value = null;
  event.target.streetAddress.value = null;
  event.target.city.value = null;
  event.target.fullState.value = null;
  event.target.zip.value = null;

}

ordersInput.addEventListener('submit', formSubmission);

//****************
// var storedCustomers = JSON.parse(localStorage.getItem('unFilledOrder'));
var unOrderOne = document.getElementById('unfilledOrderOne');
