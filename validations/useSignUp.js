export default function validateSignUp(values) {
  let errors = {};

  // validate user name
  if (!values.name) {
    errors.name = "The name is required";
  }

  // validate email user
  if (!values.email) {
    errors.email = "The email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errores.email = "Email no valido";
  }

  // validate password
  if (!values.password) {
    errors.password = "The password is required";
  } else if (values.password.lenght < 6) {
    errors.password = "The password must containt  6 characters min";
  }

  return errors;
}
