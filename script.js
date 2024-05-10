// Wait for the page to load before trying to access the elements
document.addEventListener("DOMContentLoaded", function () {
  // Get the input date field
  const inputDate = document.getElementById("inputDate");

  // Get the button
  const button = document.getElementById("calculateAge");

  // Check if the input date and button exist
  if (inputDate !== null && button !== null) {
    // Add an event listener to the button
    button.addEventListener("click", function () {
      // Get the input date value
      const date = inputDate.value;

      // Check if the input date is empty
      if (date === "") {
        alert("Please enter a date");
        return;
      }

      // Convert the input date to a Date object
      const birthDate = new Date(date);

      // Get the current date
      const today = new Date();

      // Calculate the age
      let age = today.getFullYear() - birthDate.getFullYear();

      // Check if the birthday has not yet occurred this year
      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      // Alert the age
      alert(`You are ${age} years old.`);
    });
  } else {
    alert("Please enter a date");
  }
});
