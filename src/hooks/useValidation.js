import { useState, useEffect } from "react";

const useValidation = (initialState, validate, fn) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState({});
  const [submitform, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitform) {
      const noError = Object.keys(error).length === 0;

      if (noError) {
        fn();
      }

      setSubmitForm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
      
    });


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate(value);
    setError(validationError);
    setSubmitForm(true);
  };

  const handleBlur = () => {
    const validationError = validate(value);
    setError(validationError);
  }

  return {
    value,
    error,
    submitform,
    handleSubmit,
    handleChange,
    handleBlur,
    setValue,
  };
};

export default useValidation;
