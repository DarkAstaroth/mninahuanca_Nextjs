export default function validateSignIn(value) {
  let errors = {};

  // validate email
  if (!value.email) {
    errors.email = "The email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
    errors.email = "Email not valid";
  }

  // validate password
  if (!value.password) {
    errors.password = "The password is required";
  } else if (value.password.length < 6) {
    errors.password = "The password must be at least 6 characters long ";
  }

  return errors;
}
