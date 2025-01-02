users = [
    { userId: "20006", pin: "1234", balance: 1500 },
    { userId: "20008", pin: "5678", balance: 3000 },
    { userId: "20012", pin: "8520", balance: 4500 },
    { userId: "20019", pin: "4563", balance: 5500 },
    { userId: "20020", pin: "6411", balance: 6500 },
    { userId: "20023", pin: "8273", balance: 8500 },
    { userId: "20031", pin: "2040", balance: 2500 },
];

const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("login-section");
const balanceSection = document.getElementById("balance-section");
const balanceAmount = document.getElementById("balance-amount");
const loginError = document.getElementById("login-error");
const logoutButton = document.getElementById("logout-button");

let currentUser = null;

// Handle login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userId = document.getElementById("user-id").value;
    const pin = document.getElementById("pin").value;

    // Find user
    const user = users.find((u) => u.userId === userId && u.pin === pin);

    if (user) {
        currentUser = user;
        loginSection.style.display = "none";
        balanceSection.style.display = "block";
        balanceAmount.textContent = `₹${currentUser.balance.toFixed(2)}`;
    } else {
        loginError.textContent = "Invalid User ID or PIN.";
    }
});

// Handle logout
logoutButton.addEventListener("click", () => {
    currentUser = null;
    loginSection.style.display = "block";
    balanceSection.style.display = "none";
    loginForm.reset();
    loginError.textContent = "";
});