const billAmount = document.querySelector("#bill-amount");// since id is given for bill amount so we gave #
const cashGiven = document.querySelector("#cash-given"); 
const checkButton=document.getElementById("check-button");
const message= document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes= [2000,500,100,20,10,5,1];

//  checkButton.addEventListener("click" , ()=>{  // "()=>" iska matlab h call back function 
//     console.log("clicked");  // kabhi bhi eventlistener call krenge tb argument ke under ek function aana hi chahiye
//      console.log(billAmount.value);
//  } ) 

checkButton.addEventListener("click",function validateBillAmount(){
    hideMessage();
    if(billAmount.value > 0) { //12
        if(cashGiven.value >= billAmount.value){ // 2022>12:TRUE
            const amountToBeReturned= cashGiven.value - billAmount.value; // 2022-12=2010
            calculateChange(amountToBeReturned);
        }
        else {
            showMessage("THE CASH PROVIDED SHOULD BE EQUAL TO THE BILL AMOUNT");
        }
        

    } else{
        showMessage("invalid bill amount");
    }

});

function calculateChange(amountToBeReturned){
    for(let i=0;i< availableNotes.length  ;i++){
        const numberOfNotes= Math.trunc(amountToBeReturned / availableNotes[i]);//2010/2000 = 1 SINCE truncating so it remove the decimal
        amountToBeReturned %= availableNotes[i]; //2010%2000=10
        noOfNotes[i].innerText = numberOfNotes;// updating the no of notes in the table for the current amount

    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}