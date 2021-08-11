const billAmount = document.querySelector("#bill-amt");
const cashPaid = document.querySelector("#cash-paid");
const checkButton = document.querySelector("#btn-check");
const notesNumber = document.querySelectorAll(".notes-num");
const message = document.querySelector("#err-msg");
const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",()=>{
    var billAmountValue = Number(billAmount.value);
    var cashPaidValue = Number(cashPaid.value);
    hideMsg();
    if (billAmountValue > 0){
        if(billAmountValue < cashPaidValue){
            var diffAmount = cashPaidValue - billAmountValue;
            calculateChange(diffAmount);
        }
        else if(cashPaidValue == billAmountValue){
            showMsg("No change required");
        }
        else{
            showMsg("Cash paid should be atleast equal to the bill amount");
        }
    }
    else{
        showMsg("Enter a valid amount");
    }
})

function showMsg(msg){
    message.style.display = "block";
    message.innerText = msg;
}

function hideMsg(){
    message.style.display = "none";
}

function calculateChange(diffAmount){
    for(var i=0;i<availableNotes.length;i++){
        var noOfNotes = Math.trunc(diffAmount / availableNotes[i]);
        notesNumber[i].innerText = noOfNotes;
        diffAmount %= availableNotes[i];
    }
}