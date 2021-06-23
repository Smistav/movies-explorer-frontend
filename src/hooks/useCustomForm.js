import { useState } from "react";
import useCustomValidate from "./useCustomValidate";

function useCustomForm({ onSubmit }) {
  const [values, setValues] = useState({});
  const { errors, validForm, handleValidate } = useCustomValidate();

  function handleChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    handleValidate(evt);
  };
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }
  return {
    values,
    errors,
    validForm,
    handleChange,
    handleSubmit,
  };
}
export default useCustomForm;
