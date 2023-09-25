const isNameValid = (name) => {
  return /^[A-Za-z\s]+$/.test(name) && name.length > 1;
};

const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
};

export { isNameValid, isEmailValid, isPhoneValid };