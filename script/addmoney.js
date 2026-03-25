document.getElementById("add-money-btn").addEventListener("click",function(){
const bankAccount = getValueFromInput("add-money-bank");
if(bankAccount==="Select a Bank"){
    alert("please select a bank");
    return;
}
const accno= getValueFromInput("add-money-number");
if(accno.length!=11){
    alert("invalid acc no");
    return;
}
const amount= getValueFromInput("add-money-amount");
const currentBalance = getBalance();
const newBalance = currentBalance + Number(amount);
const pin = getValueFromInput("add-money-pin");
if(pin==="1225"){
    alert (`Add Money Success from
         ${bankAccount} at ${ new (Date)}`);
    setBalance(newBalance);
    const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`
        <div class="transection-card p-5 bg-base-100">
        Successfully Add Money from
             ${bankAccount},acc-no ${accno} to ${new Date()}

        </div>
        `;
        history.append(newHistory);
}
else{
    alert("invalid pin");
    return;
}
}); 