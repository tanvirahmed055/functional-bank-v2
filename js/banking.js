//get User Input Value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    return inputAmount;
}

//deposit amount
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    //console.log(depositAmount);
    const totalDepositAmount = updateTotal('deposit-total');
})