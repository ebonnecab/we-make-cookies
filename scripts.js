/********************************

        COOKIE clicker

********************************/

//defaults
let cookieCount = 0;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function () {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
})

/********************************

        Click Power

********************************/

//default variables
let clickPower = 1;
let clickPowerPriceAmount = 10;
let clickPowerLevelNumber = 1;

//refresh cookies
let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount;
}

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function () {
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount()
        //Upgrade power level
        clickPowerLevelNumber += 1;
        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        //refresh shop item
        refreshPowerClick();

    }
})
        
// refresh power click  
let refreshPowerClick = function () {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
}
        
/********************************

          Grandmas

********************************/

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 5;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener("click", function () {

    // Make sure we have enough cookies and subtract our cookies from the price.
    if (cookieCount >= grandmaPriceAmount) {
        // Subtract cookies from the price of the item.
        cookieCount += - grandmaPriceAmount;
        refreshCookieCount()

    //upgrade power level
        grandmaLevelNumber += 1;
    //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
        grandmaPower += 10;
    //turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();
    //refresh shop item
        refreshGrandma();
    }

})

let autoGrandmaStart = function () {
    let grandmaInt = window.setInterval(function () {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}

let refreshGrandma = function () {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

    