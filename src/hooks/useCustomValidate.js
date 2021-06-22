import { useState, useEffect } from "react";

function useCustomValidate() {
  const [errors, setErrors] = useState("");
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    errors.name !== "" || errors.email !== "" || errors.password !== ""
      ? setValidForm(false)
      : setValidForm(true);
  }, [errors.name, errors.email, errors.password]);

  useEffect(() => {
    setValidForm(false);
  }, []);

  function handleValidate(name, value) {
    switch (name) {
      case "name":
        const regName = /^[a-zA-Zа-яёА-ЯЁ\s-]{2,30}$/g;
        regName.test(String(value).toLowerCase())
          ? setErrors({ ...errors, [name]: "" })
          : setErrors({ ...errors, [name]: "Введите правильное Имя" });
        break;
      case "email":
        const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        regEmail.test(String(value).toLowerCase())
          ? setErrors({ ...errors, [name]: "" })
          : setErrors({ ...errors, [name]: "Введите правильный Email" });
        break;

      case "password":
        value.length > 2 && value.length <= 100
          ? setErrors({ ...errors, [name]: "" })
          : setErrors({
            ...errors,
            [name]: "Должно быть больше 2-х символов и меньше 100",
          });
        break;

      default:
        break;
    }
  }
  return {
    errors,
    validForm,
    handleValidate,
  };
}
export default useCustomValidate;
