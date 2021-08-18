const billAmount = document.querySelector("#bill-amt");
const cashPaid = document.querySelector("#cash-paid");
const checkButton = document.querySelector("#btn-check");
const notesNumber = document.querySelectorAll(".notes-num");
const message = document.querySelector("#err-msg");
const btnProceed = document.querySelector("#btn-proceed");
const changeTable = document.querySelector("#change-table");
const cashDiv = document.querySelector("#cash")

const availableNotes = [2000,500,100,20,10,5,1];

btnProceed.addEventListener("click",()=>{
    var billAmountValue = Number(billAmount.value);
    hideMsg();
    if(billAmountValue > 0){
        btnProceed.style.display = "none";
        cashDiv.style.display = "block";
    }else{
        showMsg("Enter a valid bill amount");
    }
})


checkButton.addEventListener("click",()=>{
    var billAmountValue = Number(billAmount.value);
    var cashPaidValue = Number(cashPaid.value);
    hideMsg();
    if (billAmountValue > 0){
        if(billAmountValue < cashPaidValue){
            var diffAmount = cashPaidValue - billAmountValue;
            changeTable.style.display = "block";
            calculateChange(diffAmount);
        }
        else if(cashPaidValue == billAmountValue){
            changeTable.style.display = "none";
            showMsg("No change required");
        }
        else{
            changeTable.style.display = "none";
            showMsg("Cash paid should be atleast equal to the bill amount");
        }
    }
    else{
        changeTable.style.display = "none";
        showMsg("Enter a valid bill amount");
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