document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumber=getValueFromInput('cashout-number');
    if(cashoutNumber.length!=11){
        alert("Invalid Agent Number");
    }

    const cashoutAmount=getValueFromInput('cashout-amount');
    const currentBalance = getBalance();
    const newBalance=currentBalance-Number(cashoutAmount);
    if(newBalance<0){
        alert("Invalid Amount");
        return;
    }
    const pin=getValueFromInput('cashout-pin');
    if(pin==='1225'){

        alert("Cashout Successful");
        setBalance(newBalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`
        <div class="transection-card p-5 bg-base-100">
         Cash Out ${cashoutAmount} TAKA Successfully to
             ${cashoutNumber} , at ${new Date()}

        </div>
        `;
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin");
        return;
    }


});
// document.getElementById('cashout-btn').addEventListener('click',function(){
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashoutNumberInput.value;
//     if(cashoutNumber.length!=11){
//         alert("Invalid Agent Number");
//     }
//     const cashoutAmountInput=document.getElementById('cashout-amount');
//     const cashoutAmount=cashoutAmountInput.value;
//     const balanceElement=document.getElementById('balance');
//     const balance=balanceElement.innerText;
//     const newBalance=Number(balance)-Number(cashoutAmount);
//     if(newBalance<0){
//         alert("Invalid Amount");
//         return;
//     }
//     const cashoutPinInput=document.getElementById('cashout-pin');
//     const pin=cashoutPinInput.value;
//     if(pin==='1225'){

//         alert("Cashout Successful");
//         balanceElement.innerText=newBalance;
//     }
//     else{
//         alert("Invalid Pin");
//         return;
//     }

// });