<!DOCTYPE Html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<head>
    <title>Electric Generator</title>
    <style>
.btn {
  background-color: DodgerBlue;
  border: faded;
  color: black;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
</head>
<body>
    <center><h1>Electric Generator</h1></center>
    <center><h3 id="power"></h3></center>
    <center><h4 id="coinsPS"></h4></center>
    <button onclick ="gainCoin()", class="btn">Seperate Electrons</button>
    <button onclick ="getCoinsPS()", class="btn"> Create a Magnet</button>
    <button onclick ="upgradeCoinsPS()", class="btn"> Upgrade Magnets</button>
    <h6></h6>
    <button onclick ="something", class="btn"> Different type of button</button>

    
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


setInterval(function renderCoinsPS() 
{
    document.getElementById("coinsPS").innerHTML = unitType + " Generated per Second: " + Math.round(coinsPS * PSValue);
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
