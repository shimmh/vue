export function validateEmail(value) {
  const re = /\S+@\S+\.\S+/;
  return re.test(value);
}
