import { useState } from "react";

function useCustomValidate() {
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);

  function handleValidate(evt) {
    const target = evt.target;
    const name = target.name;

    setErrors({ ...errors, [name]: target.validationMessage });
    setValidForm(target.closest("form").checkValidity());
  };

  return { errors, validForm, handleValidate };
}
export default useCustomValidate;
