<head>
    <title>Electric Generator</title>
    <style>

</style>
</head>
<body>
    <center><h1>Electric Generator</h1></center>
    <center><h3 id="power"></h3></center>
    <center><h4 id="coinsPS"></h4></center>
    <h5 id="coinsPScost"></h5>
    <h6 id="upgradeCoinsPScost"></h6>
    <button onclick ="gainCoin()">Seperate Electrons</button>
    <button onclick ="getCoinsPS()"> Create a Magnet</button>
    <button onclick ="upgradeCoinsPS()"> Upgrade Magnets</button>
    <h7></h7>
    <button onclick ="something"> Nothing Yet</button>

    
<script>
    
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
    else
    {
        alert("You need " + coinsPScost + " " + unitType);
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
        else
        {
            alert("You need " + upgradeCoinsPScost + " " + unitType);
        }
    }

</script>
</body>
