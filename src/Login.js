import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { POST_DATA } from "./react-redux/actions";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

function Login({ dispatch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("handlesubmit");
    e.preventDefault();
    dispatch({
      type: POST_DATA,
      payload: {
        email: email,
        password: password,
        apiUrl: "http://localhost:98/api/login",
      },
    });
  };

  const handleChange = (e) => {
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  // useEffect(() => {
  //   setEmail(email);
  //   setPassword(password);
  // }, [email, password]);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required label="E-mail" variant="outlined" />
        <TextField
          required
          label="Password"
          type="password"
          variant="outlined"
        />
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading..."
          variant="outlined"
        >
          Fetch data
        </LoadingButton>
      </Box>
      <form onSubmit={handleSubmit}>
        <label for="email">E-mail:</label>
        <br />
        <input id="email" type="text" value={email} onChange={handleChange} />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          id="password"
          type="text"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch };
};

// const mapStateToProps = (store) => {
//   const { apiUrl } = store;
//   return { apiUrl };
// };

export default connect(null, mapDispatchToProps)(Login);
