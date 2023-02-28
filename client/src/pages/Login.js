import React, { useState } from 'react'
import { Box, Button, styled, TextField } from '@mui/material';
import axios from 'axios';




const Login = () => {
  // const [account, toggleAccount] = useState(initialAccount.login)
  const [user, setUser] = useState({ email: "", password: "" })



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setUser({ ...user, [name]: value })
    // console.log(user);
  }

  // login user 
  const loginUser = async (e) => {
    console.log("users list => ", user);
    await axios.post("http://localhost:9000/login", user);
    // console.log("hello");
  }



  return (
    <Component>
      <Box style={{ display: 'flex', height: '100%' }}>
        <Wraper>
          <TextField variant="standard" name='email' value={user.email} onChange={e => handleChange(e)} label="Enter Email" />
          <TextField variant="standard" name='password' value={user.password} onChange={e => handleChange(e)} label="Enter Password" />
          <LoginBtn onClick={() => loginUser()}>Login</LoginBtn>
        </Wraper>
      </Box>
    </Component>
  )
}

export default Login
const Component = styled(Box)`
    height: 70vh;
    width: 77vh;
    margin-top: 23px;
    margin: auto;
    /* border:1px solid black; */

`

const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div ,& > button ,& >p{
        margin-top: 20px;
    }


`

const LoginBtn = styled(Button)`
    text-transform: none;
    background-color: #fB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;


`
