// Example JavaScript for dynamic updates and actions

document.addEventListener('DOMContentLoaded', function () {
  // Simulate user data (In a real application, this would come from your server or localStorage)
  const username = localStorage.getItem("username") || "John Doe"; // Default to "John Doe" if not set
  const balance = parseFloat(localStorage.getItem("balance")) || 0.00; // Default to 0 if not set

  // Update dashboard with user's name and wallet balance
  document.getElementById("user-name").textContent = username;
  document.getElementById("wallet-balance").textContent = `₦${balance.toFixed(2)}`;

  // Handle airtime recharge submission
  const airtimeForm = document.getElementById("airtime-form");
  if (airtimeForm) {
    airtimeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const rechargeAmount = parseFloat(document.getElementById("airtime-amount").value);
      
      if (rechargeAmount > balance) {
        alert("Insufficient funds. Please fund your account.");
        return;
      }

      // Subtract recharge amount from balance
      const newBalance = balance - rechargeAmount;
      localStorage.setItem("balance", newBalance);
      
      // Show success message and redirect after short delay
      alert("Recharge successful!");
      setTimeout(function() {
        window.location.href = 'transactions.html'; // Redirect to transaction history
      }, 2000); // Delay before redirection
    });
  }

  // Handle data bundle purchase submission
  const dataForm = document.getElementById("data-form");
  if (dataForm) {
    dataForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const dataAmount = parseFloat(document.getElementById("data-amount").value);

      if (dataAmount > balance) {
        alert("Insufficient funds. Please fund your account.");
        return;
      }

      // Subtract data amount from balance
      const newBalance = balance - dataAmount;
      localStorage.setItem("balance", newBalance);

      // Show success message and redirect after short delay
      alert("Data purchase successful!");
      setTimeout(function() {
        window.location.href = 'transactions.html'; // Redirect to transaction history
      }, 2000); // Delay before redirection
    });
  }

  // Function to handle the user login (simulated here)
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usernameInput = document.getElementById("login-username").value;
      const passwordInput = document.getElementById("login-password").value;

      // Check username and password (hardcoded here for simplicity)
      if (usernameInput === "JohnDoe" && passwordInput === "password123") {
        localStorage.setItem("username", usernameInput); // Store username
        localStorage.setItem("balance", 1000.00); // Set default balance
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      } else {
        alert("Invalid credentials! Please try again.");
      }
    });
  }

  // Set up logout functionality (for simplicity, we just clear localStorage here)
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("username");
      localStorage.removeItem("balance");
      window.location.href = 'login.html'; // Redirect to login page
    });
  }

  // Handle navigation active class
  const navLinks = document.querySelectorAll(".app-footer nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
