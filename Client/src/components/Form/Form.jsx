/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import validator from './validation';
import { ContainerForm, Input, Button } from './StyledForm';

function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <Input
            type="text"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </ContainerForm>
  );
}

export default Form;
