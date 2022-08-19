

//add event listener to withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {


    // get input field
    const withdrawInputField = document.getElementById('withdraw');

    const currentWithdrawAmount = parseFloat(withdrawInputField.value);

    withdrawInputField.value = '';


    const balanceText = document.getElementById('balance');

    const balanceAmount = parseFloat(balanceText.innerText);


    //error handling
    if (isNaN(currentWithdrawAmount) || currentWithdrawAmount === '' || currentWithdrawAmount < 0 || currentWithdrawAmount > balanceAmount) {
        alert("Please enter a valid input");
        return;
    }


    //set withdraw text

    const withdrawText = document.getElementById('withdraw-amount');

    const prevWithdrawAmount = parseFloat(withdrawText.innerText);




    //update new withdraw amount

    withdrawText.innerText = currentWithdrawAmount + prevWithdrawAmount;

    //update balance


    const newBalance = balanceAmount - currentWithdrawAmount;

    balanceText.innerText = newBalance;





})