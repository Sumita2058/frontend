function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
  
    usernameError.textContent = ""; // Clear previous errors
    passwordError.textContent = "";
  
    let isValid = true;
  
    if (username.trim() === "") {
      usernameError.textContent = "Username is required";
      isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
        isValid = false;
    }
  
    if (password.trim() === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }
  
    if (isValid) {
        // Here you would normally submit the form or perform other actions
        // like sending a request to a server for authentication.
        alert("Login successful (Simulated).");
        document.getElementById("loginForm").reset(); // Clear the form
    }
  }