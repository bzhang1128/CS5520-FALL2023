// Validate the name input is non-numeric and the length of the input is more than 1 character
const isNameValid = (name) => {
  return /^[A-Za-z\s]+$/.test(name) && name.length > 1;
};

// Validate the email address input
const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Validate the phone number input (consists of 10 digits)
const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
};

export { isNameValid, isEmailValid, isPhoneValid };