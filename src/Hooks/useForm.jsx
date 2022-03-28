import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    ({ target }) => {
      let { name, value, type } = target;

      if (type === 'checkbox') {
        value = target.checked;
      }

      setValues({
        ...values,
        [name]: value,
      });
    },
  ];
};

export default useForm;
