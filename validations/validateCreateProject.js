export default function validateCreateProject(values) {
  let errors = {};

  // tiltle validation
  if (!values.title) {
    errors.title = "The title is required";
  }

  return errors;
}
