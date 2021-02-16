import React, { useState } from 'react';

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      ...
      <input type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        value={state.email}
        onChange={handleChange}
      />

      <input type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      ...
    </div>
  );
}