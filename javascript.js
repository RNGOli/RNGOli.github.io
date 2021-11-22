var power = 0;
var coinsPS = 0;
var coinsPC = 1;
var addInterval;
var coinsPScost = 20;
var unitType = "Electrons";
var PSValue = 1;
var upgradeCoinsPScost = 50;
    
function gainCoin() 
{
    power += Math.round(coinsPC * PSValue);
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
            upgradeCoinsPScost = (upgradeCoinsPScost * 1.5) - (upgradeCoinsPScost*1.5)%1;
        }
    }
