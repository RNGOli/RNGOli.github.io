var power = 0;
var coinsPS = 0;
var coinsPC = 1;
var addInterval;
var coinsPScost = 20;
var unitType = "Electrons";
var PSValue = 1;
var upgradeCoinsPScost = 50;
var clickValue = 1;
var upgradeClickValueCost = 15;
    
function gainCoin() 
{
    power += Math.round(coinsPC * clickValue);
}

setInterval(function renderCoins() 
{
    document.getElementById("power").innerHTML = "Total Electricity: " + power + " " + unitType;
})
    
setInterval(function renderCoinsPScost()
    {
        document.getElementById("coinsPScost").innerHTML = "Magnet Cost: " +  coinsPScost;
    })


setInterval(function renderCoinsPS() 
{
    document.getElementById("coinsPS").innerHTML = unitType + " Generated per Second: " + Math.round(coinsPS * PSValue);
})

setInterval(function renderUpgradeCoinsPS() 
{
    document.getElementById("upgradeCoinsPScost").innerHTML = "Cost for upgrade: " + upgradeCoinsPScost;
})

setInterval(function clickValue() 
{
    document.getElementById("clickValue").innerHTML = "Cost for click upgrade: " + upgradeClickValueCost;
})

function getCoinsPS()
{
    if (power >= coinsPScost)
        {
        coinsPS += 1;
        power -= coinsPScost;
        coinsPScost = (coinsPScost*1.05) - (coinsPScost*1.05)%1;
        }
}

    
    addInterval = setInterval(function coinPS() //iteration of coins per second
        {
            power += Math.round(coinsPS * PSValue);
        }, 1000)
function upgradeCoinsPS()
    {
        if(power >= upgradeCoinsPScost)
        {
            PSValue += 1;
            power -= upgradeCoinsPScost;
            upgradeCoinsPScost = (upgradeCoinsPScost * 1.25) - (upgradeCoinsPScost*1.25)%1;
        }
    }
function upgradeClickValue()
    {
        if(power >= upgradeClickValueCost)
        {
            power -= upgradeClickValueCost;
            clickValue += 1 + ((clickValue * 0.175) - (clickValue * 0.175)%1);
            upgradeClickValueCost = (upgradeClickValueCost*1.10) - (upgradeClickValueCost*1.10)%1;
        }

    }
