var initialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var checkBtn = document.querySelector("#checkBtn")
var showOuput = document.querySelector("#showOuput");

function calculateProfitAndLoss(ip, qt, cp){
    if (cp > ip){
        var profit = cp - ip;
        var profitPercentage = (profit/ip)*100
        showOuput.innerText = `Profit is ₹${profit} and profit percentage is ${profitPercentage}%.`
        showOuput.style.color = "#10B981"
    } else if (ip > cp){

        var loss = ip - cp;
        var lossPercentage = (loss/ip)*100
        showOuput.innerText = `Loss is ₹${loss} and loss percentage is ${lossPercentage}%.`
        showOuput.style.color = "#EF4444"
    } else {
        showOuput.innerText = "no pain no gain"
        showOuput.style.color = "#3B82F6"

    }
}

function validateInput(){
    ip = parseInt(initialPrice.value);
    cp = parseInt(currentPrice.value);
    qt = parseInt(quantity.value);

    if(ip&&cp&&qt){
        calculateProfitAndLoss(ip, qt, cp);
    } else {
        showOuput.innerText = "Please enter every field.";
        showOuput.style.color = "#F59E0B"
    }
}

checkBtn.addEventListener("click", validateInput)

