var initialPrice = document.querySelector("#initialPrice");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#currentPrice");
var checkBtn = document.querySelector("#checkBtn")
var showOuput = document.querySelector("#showOuput");

function calculateProfitAndLoss(ip, qt, cp){
    if (cp > ip){
        var profit = cp - ip;
        var profitPercentage = Math.floor((profit/ip)*100)
        showOuput.innerText = `Profit is ₹${profit} and profit percentage is ${profitPercentage}%.`
        showOuput.style.color = "#10B981"
    } else if (ip > cp){

        var loss = ip - cp;
        var lossPercentage = Math.floor((loss/ip)*100)
        showOuput.innerText = `Loss is ₹${loss} and loss percentage is ${lossPercentage}%.`
        showOuput.style.color = "#EF4444"
    } else {
        showOuput.innerText = "no pain no gain"
        showOuput.style.color = "#FBBF24"

    }
}

function validateInput(){
    ip = parseInt(initialPrice.value);
    cp = parseInt(currentPrice.value);
    qt = parseInt(quantity.value);

    if(ip&&cp&&qt){
        if (ip >0 && cp > 0 && qt > 0){
            calculateProfitAndLoss(ip, qt, cp);
        } else {
            showOuput.innerText = "Please enter positive values!"
            showOuput.style.color = "#FBBF24"
        }
    } else {
        showOuput.innerText = "Please enter every field.";
        showOuput.style.color = "#F59E0B"
    }
}

checkBtn.addEventListener("click", validateInput)

