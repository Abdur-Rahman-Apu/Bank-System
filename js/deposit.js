

document.getElementById('deposit-btn').addEventListener('click', function () {

    // deposit amount text 
    const depositAmount = document.getElementById('deposit-amount');

    const prevDepositAmount = depositAmount.innerText;


    // deposit input field value 
    const currentDeposit = document.getElementById('deposit');

    const currentDepositAmount = currentDeposit.value;

    // clear input field 
    currentDeposit.value = '';

    if (isNaN(currentDepositAmount) || currentDepositAmount === '' || Number(currentDepositAmount) < 0) {
        alert("Please enter valid amount");
        return;
    }



    const newDepositAmount = parseFloat(prevDepositAmount) + parseFloat(currentDepositAmount);


    // update deposit amount 
    depositAmount.innerText = newDepositAmount;


    // update balance value 
    const balance = document.getElementById('balance');

    const prevBalance = balance.innerText;

    balance.innerText = parseFloat(prevBalance) + parseFloat(currentDepositAmount);




});