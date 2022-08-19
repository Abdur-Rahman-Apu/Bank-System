document.getElementById('btn').addEventListener('click', function () {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailText = email.value;
    const passwordText = password.value;

    if (emailText === 'santan@baap.com' && passwordText === 'secret') {
        window.location.href = "bank.html";
    } else {
        alert("Invalid user");
    }
})