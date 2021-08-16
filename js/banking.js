//get current balance

function getCurrentBalance() {
    const balanceElement = document.getElementById('balance-total');
    const balanceElementText = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceElementText);
    return balanceAmount;
}


//update balance total

function updateBalance(depositAmount, isAdd) {
    const balanceElement = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceElement.innerText = previousBalance + depositAmount;
    } else if (isAdd == false) {
        balanceElement.innerText = previousBalance - depositAmount;
    }
}

//update Total Deposit or Withdraw Amount
function updateTotal(totalId, amount) {
    const getTotalField = document.getElementById(totalId);
    const getTotalAmountText = getTotalField.innerText;
    const previousTotalAmount = parseFloat(getTotalAmountText);
    getTotalField.innerText = previousTotalAmount + amount;
}

//get User Input Value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = " ";
    return inputAmount;
}

//deposit amount
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    //console.log(depositAmount);
    const totalDepositAmount = updateTotal('deposit-total', depositAmount);

    const currentBalance = getCurrentBalance();

    const totalBalance = updateBalance(depositAmount, true);
});


//withdraw amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    //console.log(withdrawAmount);
    const totalwithdrawAmount = updateTotal('withdraw-total', withdrawAmount);

    const currentBalance = getCurrentBalance();

    const totalBalance = updateBalance(withdrawAmount, false);
});