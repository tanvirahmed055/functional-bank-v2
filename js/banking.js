//get Total Deposit or Withdraw Amount
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

})