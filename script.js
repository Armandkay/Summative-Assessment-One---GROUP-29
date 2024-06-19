const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate Name (letters and spaces only)
  const nameInput = document.getElementById('name');
  const nameValue = nameInput.value.trim();
  const nameRegex = /^[a-zA-Z\s]+$/;

  if (!nameRegex.test(nameValue)) {
    alert('Name must contain letters and spaces only.');
    nameInput.focus();
    return false;
  }

  // Validate Email
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  // Validate Phone Number (format (123) 456-7890)
  const phoneInput = document.getElementById('phone');
  const phoneValue = phoneInput.value.trim();
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  if (!phoneRegex.test(phoneValue)) {
    alert('Please enter a valid phone number in the format (123) 456-7890.');
    phoneInput.focus();
    return false;
  }

  // Validate Event Date (format MM/DD/YYYY)
  const eventDateInput = document.getElementById('eventDate');
  const eventDateValue = eventDateInput.value.trim();
  const eventDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

  if (!eventDateRegex.test(eventDateValue)) {
    alert('Please enter a valid event date in MM/DD/YYYY format.');
    eventDateInput.focus();
    return false;
  }

  // Validate Number of Tickets (between 1 and 10)
  const numTicketsInput = document.getElementById('numTickets');
  const numTicketsValue = parseInt(numTicketsInput.value.trim(), 10);

  if (isNaN(numTicketsValue) || numTicketsValue < 1 || numTicketsValue > 10) {
    alert('Number of tickets must be between 1 and 10.');
    numTicketsInput.focus();
    return false;
  }

  // If all validations pass, submit the form
  alert('Registration successful!');
  form.reset();
});

