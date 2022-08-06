var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.resultForPeople')
var elResultBike = document.querySelector('.resultForBike')
var elResultCar = document.querySelector('.resultForCar')
var elResultTrain = document.querySelector('.resultForTrain')

var people = prompt('Odam tezligini kiriting!');
var bycicle = prompt('Velosiped  tezligini kiriting!');
var car = prompt('Mashina tezligini kiriting!');
var train = prompt('Poyezd tezligini kiriting!');

elForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (isNaN(elInput)) {
    elResult.textContent = 'Son kiriting!';
  }

  Number(elInput)

  var peopleTime = (elInput.value / people);
  var bikeTime = (elInput.value / bycicle);
  var carTime = (elInput.value / car);
  var trainTime = (elInput.value / train);

  elInput.value = '';
  
  var overAllPeople = ((peopleTime) - (Math.floor(peopleTime)) ).toFixed(1);
  var overAllBike = ((bikeTime) - (Math.floor(bikeTime)) ).toFixed(1);
  var overAllCar = ((carTime) - (Math.floor(carTime)) ).toFixed(1);
  var overAllTrain = ((trainTime) - (Math.floor(trainTime)) ).toFixed(1);

  elResult.textContent = 'On foot: ' + (Math.floor(peopleTime)) + '  hour  and ' + (Math.round((overAllPeople) * 60)) + ' minute.  ';
  elResultBike.textContent = 'By bike: ' + (Math.floor(bikeTime)) + '  hour  and ' + (Math.round((overAllBike) * 60)) + ' minute.  ';
  elResultCar.textContent = 'By car: ' + (Math.floor(carTime)) + '  hour  and ' + (Math.round((overAllCar) * 60)) + ' minute.  ';
  elResultTrain.textContent = 'By train: ' + (Math.floor(trainTime)) + '  hour  and ' + (Math.round((overAllTrain) * 60)) + ' minute.  ';

  if (people == 0) {
    elResult.textContent = 'Odam tezligi kiritilmadi!';
  }
  if (bycicle == 0) {
    elResultBike.textContent = 'Velosiped tezligi kiritilmadi!';
  }
  if (car == 0) {
    elResultCar.textContent = 'Mashina tezligi kiritilmadi!';
  }
  if (train == 0) {
    elResultTrain.textContent = 'Poyezd tezligi kiritilmadi!';
  }

})

