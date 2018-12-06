//overlay activate buttons
var itTrigger = document.querySelector('#itTrigger');
var merchTrigger = document.querySelector('#merchTrigger');
var marketTrigger = document.querySelector('#marketTrigger');

//overlay deactivate buttons
var navItClose = document.querySelector('#nav-it-close');
var navMerchClose = document.querySelector('#nav-merch-close');
var navMarketClose = document.querySelector('#nav-market-close');

//overlay styling to be affected
var navIt = document.querySelector('.nav-it');
var navMerch = document.querySelector('.nav-merch');
var navMarket = document.querySelector('.nav-market');

//event listeners for information technology modal
itTrigger.addEventListener('click', () => {
  navIt.style.display = "flex";
});

navItClose.addEventListener('click', () => {
  navIt.style.display = "none";
});

//event listeners for general merchandise modal
merchTrigger.addEventListener('click', () => {
  navMerch.style.display = "flex";
});

navMerchClose.addEventListener('click', () => {
  navMerch.style.display = "none";
});

//event listeners for digital marketing modal
marketTrigger.addEventListener('click', () => {
  navMarket.style.display = "flex";
});

navMarketClose.addEventListener('click', () => {
  navMarket.style.display = "none";
});