function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");
    if (dobInput) {
      const dob = new Date(dobInput);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      result.textContent =  `Your Age is: ${month} year(s).`
    } else {
      result.textContent = "Please select your date of birth.";
    }
  }